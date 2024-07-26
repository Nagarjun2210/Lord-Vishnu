function temples (){
    const all_temples = [
{ 
    id: 1,
    name: "Ranganathaswamy Temple",
    location: "Srirangam, Trichy district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Srirangam14.jpg")
},
{ 
    id: 2,
    name: "Thirukoḻi",
    location: "Uraiyur, Trichy district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Nachiyar4.jpg")
},
{ 
    id: 3,
    name: "Thirukkarambanoor",
    location: "Uthamarkoil, Tiruchirappalli district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Uthamarkoil1.jpg")
},
{ 
    id: 4,
    name: "Pundarikakshan Perumal Koil",
    location: "Thiruvellarai, Trichy district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Tiruvellarai1.jpg")
},
{ 
    id: 5,
    name: "Vadivaḻagiya Nambi Perumal Koil",
    location: "Anbil, Trichy district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Tiruanbil4.jpg")
},
{ 
    id: 6,
    name: "Appakkudathaan Perumal Koil",
    location: "Koviladi, Tanjore district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Koviladi1.jpg")
},
{ 
    id: 7,
    name: "Hara Saabha Vimocchana Perumal Temple",
    location: "Kandiyur, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Hara_Saabha_Vimochana_Perumal_.jpg")
},
{ 
    id: 8,
    name: "Thirukoodalur",
    location: "Aduthurai, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Aduthurai_perumal1.jpg")
},
{ 
    id: 9,
    name: "Thirukavithalam",
    location: "Kabisthalam, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/009_-_Thiru_Kavithalam.jpg")
},
{ 
    id: 10,
    name: "Thiruppullamboothangudi",
    location: "Pullabhoothangudi, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Pullabhoothangudi_(11).jpg")
},
{ 
    id: 11,
    name: "Thiruaadhanur",
    location: "Adanur, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Adhanur_perumal.jpg")
},
{ 
    id: 12,
    name: "Thirukudanthai",
    location: "Kumbakonam, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Gopuras_in_Kumbakonam_-_India.jpg")
},
{ 
    id: 13,
    name: "Thiruvinnagar",
    location: "Tirunageswaram, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Uppiliappan_koil3.jpg")
},
{ 
    id: 14,
    name: "Thirunaraiyur",
    location: "Nachiyar Kovil, Thiruvarur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Nachiyar_Kovil_(13).jpg")
},
{ 
    id: 15,
    name: "Thirucherai",
    location: "Tirucherai, Thiruvarur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirucherai_temple_tank_(1).jpg")
},
{ 
    id: 16,
    name: "Thirunandhipura Vinnagaram",
    location: "Nathan Kovil, Thiruvarur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Natankovil1.jpg")
},
{ 
    id: 17,
    name: "Thiruvelliyangudi",
    location: "Thiruvelliyangudi, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Velliyangudi_temple.jpg")
},
{ 
    id: 18,
    name: "Thirukannamangai",
    location: "Thirukannamangai, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirukannamangai2.jpg")
},
    {
    id: 19,
    name: "Thirukannapuram",
    location: "Tirukannapuram, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Tirukannapuram9.jpg")
},
{ 
    id: 20,
    name: "Thirukannangudi",
    location: "Tirukannankudi, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirukannangudi_01_09_2021_withRahul.jpg")
},
{ 
    id: 21,
    name: "Thirunagai",
    location: "Nagapattinam, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirunagai8.jpg")
},
{ 
    id: 22,
    name: "Thiruthanjai Mamanikoil",
    location: "Thanjavur, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Neelamegha_Perumal_temple_(5).jpg")
},
{ 
    id: 23,
    name: "Manikundram",
    location: "Thanjavur, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Manikundra_Perumal_temple,_Thanjavur_(4).jpg")
},
{ 
    id: 24,
    name: "Thanjaiyali Nagar",
    location: "Thanjavur, Thanjavur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Veeranarasimha_Perumal_temple_(1)_02.jpg")
},
{ 
    id: 25,
    name: "Thiruvazhundur",
    location: "Theranzhdur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Therazhunthur_3.jpg")
},
{ 
    id: 26,
    name: "Thiruchirupuliyur",
    location: "Thirusirupuliyur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Tiruchirupuliur4.jpg")
},
{ 
    id: 27,
    name: "Thiruthalaichanga Nanmadiyam",
    location: "Thalachangadu, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Thalachanga_Nanmathiyam_(6).jpg")
},
{ 
    id: 28,
    name: "Thiruindalur",
    location: "Indalur, Mayiladuthurai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Indaloor1.jpg")
},
{ 
    id: 29,
    name: "Thirukazhicheerama Vinnagaram",
    location: "Sirkazhi, Mayiladuthurai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thadalankoil_(10).jpg")
},
{ 
    id: 30,
    name: "Thirukkavalambadi",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirukavalambadi2.jpg")
},
{ 
    id: 31,
    name: "Thiruarimeya Vinnagaram",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Arimeya_Vinnagaram_-_Kuamadukoothan5.jpg")
},
{ 
    id: 32,
    name: "Thiruvanpurushothamam",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thrivuanpurushotam2.jpg")
},
{ 
    id: 33,
    name: "Thirusemponsaikoil",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruchsemponsey2.jpg")
},
{ 
    id: 34,
    name: "Thirumanimadakoil",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Narayana_Perumal5.jpg")
},
{ 
    id: 35,
    name: "Thiruvaikunta Vinnagaram",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Vaikunda_vinnagaram_2.jpg")
},
{ 
    id: 36,
    name: "Thiruthetriambalam",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Pallikonda_Perumal_-_Thiruthetriambalam3.jpg")
},
{ 
    id: 37,
    name: "Thirumanikoodam",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirumanikoodam4.jpg")
},
{ 
    id: 38,
    name: "Thiruparthanpalli",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruparthanpalli1.jpg")
},
{ 
    id: 39,
    name: "Thiruvali",
    location: "Thiruvali, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruvali4.jpg")
},
{ 
    id: 40,
    name: "Thirunagari",
    location: "Thirunagari, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirunagari1.jpg")
},
{ 
    id: 41,
    name: "Thiruthevanarthogai",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruthevanarthogai3.jpg")
},
{ 
    id: 42,
    name: "Thiruvellakulam",
    location: "Thirunangur, Nagapattinam district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Annan_koil.jpg")
},
{ 
    id: 43,
    name: "Thiruchitrakootam",
    location: "Chidambaram, Cuddalore district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Temple_Tank_(Sivaganga),_Nataraja_Temple_-_panoramio.jpg")
},
{ 
    id: 44,
    name: "Thiruvaheendrapuram",
    location: "Thiruvanthipuram, Cuddalore district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Devanathaswamytemple_(6).jpg")
},
{ 
    id: 45,
    name: "Thirukkovalur",
    location: "Thirukoyilur, Kallakurichi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ulagalantha_Perumal9.jpg")
},
{ 
    id: 46,
    name: "Thirukkachi - Atthigiri",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Varadaraja_Perumal_Temple_Kanchipuram_(31).jpg")
},
{ 
    id: 47,
    name: "Ashtabuyagaram",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ashtabhujakaram_(9).jpg")
},
{ 
    id: 48,
    name: "Thiruthanka",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Vilakkoli-perumal108dd.jpg")
},
{ 
    id: 49,
    name: "Thiruvelukkai",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Tiruvelukkai_(3).jpg")
},
{ 
    id: 50,
    name: "Thiruneeragam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ulagalantha_perumal_Kanchipuram3.jpg")
},
{ 
    id: 51,
    name: "Thiruppadagam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Pandavathoothar_(7).jpg")
},
{ 
    id: 52,
    name: "Nilathingal Thundam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ekambareswarar3.jpg")
},
{ 
    id: 53,
    name: "Thiruooragam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ulagalantha_perumal_Kanchipuram3 (1).jpg")
},
{ 
    id: 54,
    name: "Thiruvekka",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Yathothkari_(2).jpg")
},
{ 
    id: 55,
    name: "Thirukkaragam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ulagalantha_perumal_Kanchipuram3 (2).jpg")
},
{ 
    id: 56,
    name: "Thirukkarvaanam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Ulagalantha_perumal_Kanchipuram3 (3).jpg")
},
{ 
    id: 57,
    name: "Thirukkalvanur",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Kanchipuram.in_Kamakshi-Amman_Temple_-_panoramio.jpg")
},
{ 
    id: 58,
    name: "Thiruppavalavannam",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Manavalamamunigal_05.jpg")
},
{ 
    id: 59,
    name: "Thiru Parameswara Vinnagaram",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Parameswara_Vinnagaram.jpg")
},
{ 
    id: 60,
    name: "Thiruputkuzhi",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Tirupukuzhi1.jpg")
},
{ 
    id: 61,
    name: "Thirunindravur",
    location: "Thirunindravur, Chennai, Tiruvallur District, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Bakthavtsala_perumal_gopuram.jpg")
},
{ 
    id: 62,
    name: "Thiruvallur",
    location: "Thiruvallur, Chennai, Tiruvallur district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Tiruvallur9.jpg")
},
{ 
    id: 63,
    name: "Thiruvallikeni",
    location: "Chennai, Chennai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Tiruvallikeni1.jpg")
},
{ 
    id: 64,
    name: "Thiruneermalai, Chennai",
    location: "Kanchipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruneermalai_temple.jpg")
},
{ 
    id: 65,
    name: "Thiruvidanthai",
    location: "Thiruvidanthai, Chennai, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruvidanthai8.jpg")
},
{ 
    id: 66,
    name: "Thirukkadanmallai",
    location: "Mahabalipuram, Kanchipuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirukadalmallai_Temple.jpg")
},
{ 
    id: 67,
    name: "Thirukkadigai",
    location: "Sholinghur, Vellore district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Sholingar_(15).jpg")
},
{ 
    id: 68,
    name: "Thiruvayothi (Ram Janmabhoomi)",
    location: "Ayodhya, Ayodhya district, Uttar Pradesh",
    image_source: require("../resources/divyadesam_images/130px-Ayodhya_500_(9).jpg")
},
{ 
    id: 69,
    name: "Naimisaranyam",
    location: "Misrikh Neemsar, Uttar Pradesh",
    image_source: require("../resources/divyadesam_images/Cakratirtham.jpg")
},
{ 
    id: 70,
    name: "Thirupruthi (Jyothirmath) Shri Narsimmha Mandir/ Parampurusha Perumala Mandir.",
    location: "Jyotirmath, Chamoli district, Uttarakhand",
    image_source: require("../resources/divyadesam_images/Narsingh_Temple,_Joshimath.jpg")
},
{ 
    id: 71,
    name: "Thirukkandamenum Kadinagar",
    location: "Devaprayag, Tehri Garhwal district, Uttarakhand",
    image_source: require("../resources/divyadesam_images/Devprayag2008.jpg")
},
{ 
    id: 72,
    name: "Thiruvadari (Badrinath)",
    location: "Badrinath, Chamoli district, Uttarakhand",
    image_source: require("../resources/divyadesam_images/Badrinath_temple.jpg")
},
{ 
    id: 73,
    name: "Thiru Saligram (Muktinath)",
    location: "Muktinath Valley, Mustang District, Nepal",
    image_source: require("../resources/divyadesam_images/Muktinath_Temple_view.jpg")
},
{ 
    id: 74,
    name: "Thiruvadamadurai (Krishna Janmabhoomi)",
    location: "Mathura, Mathura district, Uttar Pradesh",
    image_source: require("../resources/divyadesam_images/Mathura_Temple-Mathura-India0002.jpg")
},
{ 
    id: 75,
    name: "Thiruvaipadi (Gokula)",
    location: "Gokul, Mathura district, Uttar Pradesh",
    image_source: require("../resources/divyadesam_images/Gokul_temple.jpg")
},
{ 
    id: 76,
    name: "Thirudwarakai (Dwarakadheesh)",
    location: "Dwarka, Devbhoomi Dwarka district, Gujarat",
    image_source: require("../resources/divyadesam_images/Dwarakadheesh_Temple.jpg")
},
{ 
    id: 77,
    name: "Ahobilam",
    location: "Ahobilam, Kurnool district, Andhra Pradesh",
    image_source: require("../resources/divyadesam_images/Upper_Ahobilam_temple_Gopuram.jpg")
},
{ 
    id: 78,
    name: "Thiruvenkadam",
    location: "Tirupati, Chittoor district, Andhra Pradesh",
    image_source: require("../resources/divyadesam_images/Tirumala_Venkateswara_temple_entrance_09062015.jpg")
},
{ 
    id: 79,
    name: "Thirunavai",
    location: "Tirunavaya, Mallapuram district, Kerala",
    image_source: require("../resources/divyadesam_images/130px-Thirunavaya_Navamukunda_Temple.jpg")
},
{ 
    id: 80,
    name: "Thiruvithuvakodu",
    location: "Thiruvithuvakoodu, Palakkad district, Kerala",
    image_source: require("../resources/divyadesam_images/Thiruvithuvakoodu_(3).jpg")
},
{ 
    id: 81,
    name: "Thrikkakara Vamanamoorthy Kshethram (Thirukatkarai)",
    location: "Thrikkakara, Ernakulam district, Kerala",
    image_source: require("../resources/divyadesam_images/Thirukatkarai3.jpg")
},
{ 
    id: 82,
    name: "Thirumoozhikkalam",
    location: "Thirumoozhikulam, Ernakulam district, Kerala",
    image_source: require("../resources/divyadesam_images/Thirumoozhikalam2.jpg")
},
{
    id: 83,
    name: "Sree Vallabha Temple (Thiruvallavazh)",
    location: "Thiruvalla, Pathanamthitta district, Kerala",
    image_source: require("../resources/divyadesam_images/Sree_Vallaba_Temple_5.jpg")
},
{ 
    id: 84,
    name: "Thrikodithanam Mahavishnu Temple (Thirukkodithanam)",
    location: "Thrikkodithanam, Changanassery, Kottayam District, Kerala",
    image_source: require("../resources/divyadesam_images/Thrickodithanam_8.jpg")
},
{ 
    id: 85,
    name: "Thrichittatt Mahavishnu Temple (Thiruchengundrur)",
    location: "Chengannur, Alappuzha District, Kerala",
    image_source: require("../resources/divyadesam_images/Thrichittatt_Maha_Vishnu_Temple1.jpg")
},
{ 
    id: 86,
    name: "Thiruppuliyur",
    location: "Thripuliyur, Alappuzha District, Kerala",
    image_source: require("../resources/divyadesam_images/Puliyoor.jpg")
},
{ 
    id: 87,
    name: "Aranmula Parthasarathy Temple (Thiruvaranvilai)",
    location: "Aranmula, Pathanamthitta District, Kerala",
    image_source: require("../resources/divyadesam_images/Aranmula_Temple.jpg")
},
{ 
    id: 88,
    name: "Thiruvanvandoor",
    location: "Thiruvanvandoor, Alappuzha District, Kerala",
    image_source: require("../resources/divyadesam_images/Thiruvanvandoor_Pambanaiappan_Temple_1.jpg")
},
{ 
    id: 89,
    name: "Thiruvananthapuram",
    location: "Thiruvananthapuram, Thiruvananthapuram District, Kerala",
    image_source: require("../resources/divyadesam_images/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg")
},
{ 
    id: 90,
    name: "Thiruvattaru",
    location: "Thiruvattar, Kanyakumari district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruvattar_Adhi_Kesava_Temple.jpg")
},
{ 
    id: 91,
    name: "Thiruvanparisaram",
    location: "Thiruppathisaram, Kanyakumari district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thriuppathisaram.jpg")
},
{ 
    id: 92,
    name: "Thirukkurungudi",
    location: "Thirukkurungudi, Tirunelveli district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirukarungudi_temple.jpg")
},
{ 
    id: 93,
    name: "Thirucheeravaramangai",
    location: "Nanguneri, Tirunelveli district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Naguneri18.jpg")
},
{ 
    id: 94,
    name: "Thiruvaigundam",
    location: "Srivaikuntam, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Srivaikuntam6.jpg")
},
{ 
    id: 95,
    name: "Thiruvaragunamangai",
    location: "Natham, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Varagunamangai1.jpg")
},
{ 
    id: 96,
    name: "Thiruppuliangudi",
    location: "Thirupulingudi, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Thirupuliyangudi3.jpg")
},
{ 
    id: 97,
    name: "Thirutholaivillimangalam (Navathirupathi)",
    location: "Tholavillimangalam, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Aravinda_Lochanar_temple2.jpg")
},
{ 
    id: 98,
    name: "Thirukkulandai (Navathirupathi)",
    location: "Perungulam, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Thirukulandhai1.jpg")
},
{ 
    id: 99,
    name: "Thirukkolur (Navathirupathi)",
    location: "Thirukolur, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Thirukkolur3.jpg")
},
{ 
    id: 100,
    name: "Thirupperai",
    location: "Thenthiruperai, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Then_Thirupperai3.jpg")
},
{ 
    id: 101,
    name: "Thirukkurugur",
    location: "Alwarthirunagari, Thoothukudi district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/130px-Azhwar_Thirunagari9.jpg")
},
{ 
    id: 102,
    name: "Srivillipputhur",
    location: "Srivilliputhur, Virudhunagar district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Andal_Temple.jpg")
},
{ 
    id: 103,
    name: "Thiruthangal",
    location: "Thiruthankal Virudhunagar district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thiruthankal_temple_(1).jpg")
},
{ 
    id: 104,
    name: "Thirukkoodal",
    location: "Madurai, Madurai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Koodalazhagar_(15).jpg")
},
{ 
    id: 105,
    name: "Thirumaliruncholai",
    location: "Alagar Koyil, Madurai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/AzhagarKovil_Madurai.jpg")
},
{ 
    id: 106,
    name: "Thirumogur",
    location: "Thirumohur, Madurai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Tirumohur_(9).jpg")
},
{ 
    id: 107,
    name: "Thirukkoshtiyur",
    location: "Thirukoshtiyur, Sivaganga district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Sowmyanarayana_Perumal_(8).jpg")
},
{ 
    id: 108,
    name: "Thiruppullani",
    location: "Thirupullani, Ramanathapuram district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Tirupullani1.jpg")
},
{ 
    id: 109,
    name: "Thirumeyyam",
    location: "Thirumayam, Pudukottai district, Tamil Nadu",
    image_source: require("../resources/divyadesam_images/Thirumayam_temple.jpg")
},
{ 
    id: 110,
    name: "Kshira Sagara (Tirupparkatal) (Ocean of Milk)",
    location: "Vinnulaga Tirupati",
    image_source: require("../resources/divyadesam_images/130px-Vishnu_and_Lakshmi_on_Shesha_Naga,_ca_1870.jpg")
},
{ 
    id: 111,
    name: "Tirupparamapadam (Vaikuntha)",
    location: "Vinnulaga Tirupati",
    image_source: require("../resources/divyadesam_images/Picture_of_Vaikunda_-_Garuda_eagle_is_the_vehicle_of_Vishnu.jpg")
},  
]
    
    return all_temples;
}

export default temples;