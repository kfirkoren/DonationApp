import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scaling';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import Donations, {
  updateSelectedDonationId,
} from '../../redux/reducers/Donations';
import {logOut} from '../../api/user';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  // console.log(user);
  const categories = useSelector(state => state.categories);
  // console.log(categories);
  const donations = useSelector(state => state.donations);
  // console.log(donations);
  const [donationItems, setdonationItems] = useState([]);
  // console.log(donationItems);

  const categoryPageSize = 4;
  const [categoryPage, setcategoryPage] = useState(1);
  const [categoryList, setcategoryList] = useState([]);
  const [isLoadingCategories, setisisLoadingCategories] = useState(false);

  const pagination = (items, pageNumber, pageSize) => {
    // console.log('currentPage' + pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setisisLoadingCategories(true);
    setcategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setcategoryPage(prev => prev + 1);
    setisisLoadingCategories(false);
  }, []);

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setdonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello!, </Text>
            <View style={style.userName}>
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
          <View>
            <Image
              style={style.profileImage}
              source={{uri: user.profileImage}}
              resizeMode="contain"
            />
            <Pressable
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
              <Header type={3} title={'Logout'} color={'#156CF7'} />
            </Pressable>
          </View>
        </View>
        <View style={style.search}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/DonationApp.png')}
            resizeMode="contain"
          />
        </Pressable>
        <View style={style.categories}>
          <View style={style.categoryHeader}>
            <Header title={'Select Ctegory'} type={2} />
          </View>
          <FlatList
            onEndReachedThreshold={0.5} 
            onEndReached={() => {
              // console.log('User reached the end');
              if (isLoadingCategories) {
                return;
              }
              setisisLoadingCategories(true);
              const newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setcategoryList(prev => [...prev, ...newData]);
                setcategoryPage(prev => prev + 1);
              }
              setisisLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                />
              </View>
            )}
          />
        </View>

        {donationItems.length > 0 && (
          <View style={style.donationItemContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );

              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.singleDonationItem, {
                        categoryInformation,
                      });
                      // console.log(selectedDonationId);
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                    badgeTitle={
                      categoryInformation.name
                    }
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
