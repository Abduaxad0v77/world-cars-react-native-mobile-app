import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Cars{
    id: string;
    carName: string;
    about: string;
    image: any
}
interface Brends {
  id: string;
  name: string;
  cars: Cars[]
}
const gridData: Brends[] = [
  { id: '1', name: 'Mercedes-Benz',
    cars: [
        {
            id: '0',
            carName: "Mercedes-Benz AMG G 63",
            about: "Zirhli Gelik AMG Performance 4MATIC to‘liq g‘ildirakli uzatmalar qutisi va 577 ot kuchiga ega bo‘lgan tork konvertori bilan yaxshilangan to‘qqiz pog‘onali avtomat uzatmali 4,0 litrli V8 AMG V8 dvigateli bilan jihozlangan. Kompaniya innovatsion kompozit materiallardan foydalangan, shuning uchun mashina zirhsiz versiya bilan bir xil ko'rinadi.Zirhli mashinaning narxi 295 000 dollardan boshlanadi",
            image: require("../../assets/images/gelik.png")
        },
        {
            id: '1',
            carName: "Mercedes-benz w218 CLS63 ",
            about: "Ikkita benzin va ikkita dizel dvigatel mavjud . Benzinli dvigatellar 306 ot kuchi va 370 Nm aylanish momentiga ega 3,5 litrli V6 , uchinchi avlod BlueDirect to'g'ridan-to'g'ri quyish tizimiga ega va 408 ot kuchi va 600 Nm aylanish momentiga ega yangi 4,6 litrli V8 . Dizel dvigatellar 204 ot kuchi va 500 Nm aylanish momentiga ega 2,1 litrli to'rt silindrli ikki turbo dvigatel va 265 ot kuchi va 620 Nm aylanish momentiga ega 3,0 litrli V6 dvigatelidir.Germaniyada yangi kupening narxi CLS 250 CDI uchun 59 857 yevro, CLS 350 CDI uchun 63 427 yevro va CLS 350 uchun 64 617 yevro",
            image: require("../../assets/images/encar.png")
        },

    ]
  },
  { id: '2', name: 'BMW',
    cars: [
        {
            id: '0',
            carName: "BMW M8",
            about: "Muxlislar ko'rgazma zallariga birinchi BMW M8 Competition Coupé (F92), Convertible (F91) va Gran Coupé (F93) kelishini 2019 yilgacha kutishlari kerak edi. Ikki parallel turbokompressor bilan V8 dvigateli 625 ot kuchi (460 kVt) ishlab chiqaradi, bu ixtiyoriy M Driver's Package bilan 300 km/soat (186 milya) dan ortiq tezlikka erishish imkonini beradi",
            image: require("../../assets/images/bmw m8.png")
        },
        {
            id: '1',
            carName: "BMW G09",
            about: "Zamonaviy plug-in gibrid texnologiyasi bilan jihozlangan BMW XM o'zining yangi V8 dvigatelidan 480 kVt (653 ot kuchi) quvvat beradi, elektr rejimida (WLTP) 88 km (54 mil) masofani bosib o'tadi va deyarli jim ishlaydi va nol chiqindilar bilan faxrlanadi.",
            image: require("../../assets/images/bmw g09.png")
        },
    ]
   },
  { id: '3', name: 'Rolce Roys',
    cars: [
        {
            id: '0',
            carName: "Rolls-Royce Phantom",
            about: "Muxlislar ko'rgazma zallariga birinchi BMW M8 Competition Coupé (F92), Convertible (F91) va Gran Coupé (F93) kelishini 2019 yilgacha kutishlari kerak edi. Ikki parallel turbokompressor bilan V8 dvigateli 625 ot kuchi (460 kVt) ishlab chiqaradi, bu ixtiyoriy M Driver's Package bilan 300 km/soat (186 milya) dan ortiq tezlikka erishish imkonini beradi",
            image: require("../../assets/images/rrphantom.png")
        },
    ]
  },
  { id: '4', name: 'Bugatti', 
    cars: [
        {
            id: '0',
            carName: "Bugatti Chiron",
            about: "Chiron Pur Sport⁵ singari, Chiron Profilée to'rt turboli 8,0 litrli kuchli 1500 ot kuchiga ega ishlanmasidan foydalanadi, ammo avtomobil solitaire o'zining dizayni va detallari bilan mutlaqo noyobdir. Avtomobil korpusiga to'g'ridan-to'g'ri o'rnatilgan orqa qanot yuqori tezlikda barqarorlikni ta'minlaydi va W16 dvigateli uchun muhim sovutishni ta'minlaydi. Profilee shuningdek, interyerda to‘qilgan charm qoplamali sotilgan birinchi Chiron bo‘lib, uning Argent Atlantique deb nomlangan tashqi rangi mutlaqo noyob va hech qachon boshqa Chiron modelida qo‘llanilmagan va qo‘llanilmaydi ham.",
            image: require("../../assets/images/bugatti chiron.png")
        },
    ]
   },
  { id: '5', name: 'Lamborgini', 
    cars: [
        {
            id: '0',
            carName: "Lamborghini Revuelto",
            about: "Ushbu giperkarda atmosfera 6,5 litrli V12, zamonaviy gibrid tizim va 8 pog'onali AMT to'liq g'ildiragi mavjud. 1001 ot kuchi, ta'sirchan ishlashi va taniqli uslub Lamborghini DNKsining timsolidir. Interer Verde Turbine charm va Rosso Alala kontrastli tikuv kombinatsiyasida ishlangan. Isitiladigan va elektr bilan sozlanadigan o‘rindiqlar, ikki zonali iqlim nazorati va yuqori sifatli bezak haydovchi va yo‘lovchilar uchun ideal muhit yaratadi.",
            image: require("../../assets/images/lamborgini jetcar.png")
        },
    ]
  },
  { id: '6', name: 'Ferrari', cars: [
        {
            id: '0',
            carName: "Ferrari LaFerrari ",
            about: "Ferrari LaFerrari kompaniyaning birinchi ishlab chiqarilgan gibrid sport avtomobili bo'lib, 2013 yilda cheklangan nashr sifatida chiqarilgan. Bu ism italyanchadan \"bu Ferrari\" deb tarjima qilingan. Enzoning vorisi bo'lgan yangi avtomobilni ishlab chiqish 2005 yilda boshlangan. Natijada, LaFerrari seriyadagi eng kuchli avtomobilga aylandi - uning atmosferadagi 12 silindrli benzinli dvigateli va ikkita elektr motori birgalikda 963 ot kuchiga ega.",
            image: require("../../assets/images/ferrariCar.png")
        },
    ] },
  { id: '7', name: 'Bentley', cars: [
        {
            id: '0',
            carName: "Flying Spur",
            about: "Flying Spur hozirda 782 ot kuchiga ega. Standart sifatida. Bu sizning e'tiboringizni tortdi. Bu qandaydir katta Brabus Mercedes kabi balyoz sport saloni yoki Rolls-Royce kabi yostiqsimon uber-lyuks limuzin emas . Bu ikkala narsani ham kayfiyatingizga, sharoitingizga yoki kim boshqarayotganiga – sizga yoki haydovchingizga qarab bajarishi mumkin.",
            image: require("../../assets/images/flyinSpur.png")
        },
    ]},
  { id: '8', name: 'Ford', cars: [
        {
            id: '0',
            carName: "Ford F-150",
            about: "Ranger butun dunyo bo'ylab 180 ta bozorda sotiladi va ulardan 17 tasida u o'z sinfidagi eng ko'p sotuvchi hisoblanadi. Model 2011 yilda tanaffusga chiqqanidan keyin 2018 yilda qayta taqdim etilgan Amerika Qo'shma Shtatlarida Ranger o'rta yoshdagi bolaga o'xshaydi. Hajmi va imkoniyatlari jihatidan u katta F-150 va kichik, avtomobilga o'xshash Ford Maverick o'rtasida mos keladi .",
            image: require("../../assets/images/fordf150.png")
        },
    ]},
  { id: '9', name: 'Porsche', cars: [
        {
            id: '0',
            carName: "Porsche 911 GT3 RS",
            about: "Texnik xususiyatlari.Quvvat bloki Silindrlar soni 6.Silindr diametri 102,0 mm.Piston zarbasi 81,5 mm,Ish hajmi 3,996 sm,Quvvat (kVt) 386 kVt quvvat (ot kuchi) 525 ot kuchi,Dvigatelning maksimal tezligi 9.000 rpm,Maksimal moment 465 nm,Litr uchun maksimal quvvat (kVt/l) 96,00 kVt / l Litr uchun maksimal quvvat (ot kuchi/l) 131,00 ot kuchi / l,Maksimal tezlik 296 km/soat,0 dan 100 km/soat 3,2 s gacha tezlashuv",
            image: require("../../assets/images/porsche911.png")
        },
    ] },
  { id: '10', name: 'Chevrolet', cars: [
        {
            id: '0',
            carName: "Chevrolet Cobalt",
            about: "Amaliylik va barcha zarur xususiyatlar va xususiyatlarning optimal kombinatsiyasi Chevrolet Cobalt-ni oila uchun ideal avtomobil, ajralmas hamroh va har qanday masofada har qanday sayohatda ishonchli yordamchiga aylantiradi.",
            image: require("../../assets/images/kobalt.png")
        },
        {
            id: '1',
            carName: "Chevrolet Camaro",
            about: "Quvvat stansiyalariga 335 ot kuchiga ega V-6 va yurak urishi 455 ot kuchiga ega V-8 kiradi. Yuqori unumdor 650 ot kuchiga ega Camaro ZL1 alohida ko'rib chiqiladi. Camaroning shaharlararo raqiblari alohida yo'l tutdilar, Ford yangi Mustangni taqdim etdi va Dodge o'zining sevimli Challengerini ko'mib tashladi. ",
            image: require("../../assets/images//camaro.png")
        },
    ]},
];
export default function Car() {
    const {name} = useLocalSearchParams();
    const item = gridData
    .map(brand => brand.cars.find(car => car.carName === name))
    .find(car => car !== undefined);

    console.log(item);
    
  return (
    <ScrollView 
    showsVerticalScrollIndicator = {false}
    >
        <View style={styles.header}>
        <View style={styles.headerTop}>
        <Ionicons name="log-out"
        onPress={() => 
          router.push({
            pathname: "/(tabs)"
          })
        }    
        style={{transform: "rotate(180deg)", color: "beige"}} size={24} color="#333" />
        <Text style={styles.title}>{name}</Text>
        </View>
      </View>
      <View >
                      <Image 
                        source={item?.image}
                      />
                      <Text style={{fontWeight: "700", fontSize: 24, marginVertical: 10, marginLeft: 6}}>{item?.carName}</Text>
                      <Text style={{ fontSize: 16, marginVertical: 10, marginLeft: 6}}>{item?.about}</Text>
                    </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header: {
    backgroundColor: "#8eb2faff",
    paddingHorizontal: 5,
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
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "Roboto Medium",
    color: "#333",
    letterSpacing: 0.5,
    marginLeft: 10,
  },
  headerIconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  card: {
    padding: 8,
    backgroundColor: "azure",
    marginVertical: 2
  }
})
