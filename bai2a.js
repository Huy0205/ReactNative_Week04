import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function Bai2a() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.textView1}>LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.txtView}>
          <Image
            source={require("./assets/avatar_user.png")}
            style={styles.iconTxt}
          ></Image>
          <TextInput placeholder="Name" style={styles.txt}></TextInput>
        </View>
        <View style={styles.txtView}>
          <Image
            style={styles.iconTxt}
            source={require("./assets/lock.png")}
          ></Image>
          <TextInput placeholder="Password" style={styles.txt}></TextInput>
          <Image
            style={styles.iconTxt}
            source={require("./assets/eye.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.view3}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.view4}>
        <Pressable>
          <Text style={styles.textView4}>CREATE ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
  },

  view1: {
    flex: 3,
    justifyContent: "center",
    paddingLeft: 40,
  },

  textView1: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 35,
    letterSpacing: 0,
  },

  view2:{
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  txtView: {
    flexDirection: "row",
    width: 330,
    height: 54,
    border: '1px solid #F2F2F2',
    justifyContent: "center",
    alignItems: "center",
  },

  iconTxt: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
  },

  txt:{
    flex: 1,
    flexDirection: 'row',
    height:'100%',
  },

  view3:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  btn:{
    width: 330,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#060000',

  },

  textBtn:{
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0,
    color:'#FFFFFF',
  },
  
  view4:{
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  
  textView4:{
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0,
  }
});
