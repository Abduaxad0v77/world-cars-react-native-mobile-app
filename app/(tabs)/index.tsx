import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Brends {
  id: string;
  name: string;
  image: any;
  color: string;
}

// Grid uchun ma'lumotlar
const gridData: Brends[] = [
  { id: '1', name: 'Mercedes-Benz', image: require('../../assets/images/mers.png'), color: '#FF6B6B' },
  { id: '2', name: 'BMW', image: require('../../assets/images/bmw.png'), color: '#4ECDC4' },
  { id: '3', name: 'Rolce Roys', image: require('../../assets/images/rr.png'), color: '#45B7D1' },
  { id: '4', name: 'Bugatti', image: require('../../assets/images/bugatti.png'), color: '#96CEB4' },
  { id: '5', name: 'Lamborgini', image: require('../../assets/images/lamborgini.png'), color: '#FFEAA7' },
  { id: '6', name: 'Ferrari', image: require('../../assets/images/ferrari.png'), color: '#DDA0DD' },
  { id: '7', name: 'Bentley', image: require('../../assets/images/bentley.png'), color: '#98D8C8' },
  { id: '8', name: 'Ford', image: require('../../assets/images/ford.png'), color: '#F7DC6F' },
  { id: '9', name: 'Porsche', image: require('../../assets/images/porsche.png'), color: '#BB8FCE' },
  { id: '10', name: 'Chevrolet', image: require('../../assets/images/chevrolet.png'), color: '#85C1E9' },
];

export default function Home() {
  const renderGridItem = ({ item }: { item: Brends }) => (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => 
        router.push({
          pathname: "/brendCars/[name]",
          params: { name: item.name, id: item.id }
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.gridImage} resizeMode="contain" />
      </View>
      <Text style={styles.brandName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header - Oq rang */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>World Cars</Text>
          <View style={styles.headerIconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Asosiy grid kontent */}
      <View style={styles.content}>
        <FlatList
          data={gridData}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={styles.columnWrapper}
          // onPress bu yerda OLIB TASHLANDI
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white" 
  },
  header: {
    backgroundColor: "#8eb2faff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff5a6ff',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "Roboto Medium",
    color: "#333",
    letterSpacing: 0.5,
  },
  headerIconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  gridContainer: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth: '49%', 
  },
  imageContainer: {
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridImage: {
    width: 120,
    height: 120,
  },
  brandName: {
    fontSize: 14,
    fontFamily: "Roboto Medium",
    color: "#333",
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    fontFamily: "Roboto Regular",
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    color: '#2196F3',
    fontFamily: "Roboto Medium",
    marginTop: 4,
  },
});