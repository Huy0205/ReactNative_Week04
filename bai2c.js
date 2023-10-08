import { StyleSheet, CheckBox, View, Text, TextInput, Pressable } from "react-native";

export default function Bai2c() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>
            PASSWORD<br></br>GENERATOR
          </Text>
        </View>
        <View style={styles.viewTextShowPassword}>
          <Text style={styles.textShowPassword}>ghasfdyfweyu</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formRow}>
            <Text style={styles.label}>Password length</Text>
            <TextInput style={styles.txtPasswordLength}></TextInput>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Include lower case letters</Text>
            <CheckBox></CheckBox>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Include upcase letters</Text>
            <CheckBox></CheckBox>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Include number</Text>
            <CheckBox></CheckBox>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Include special symbol</Text>
            <CheckBox></CheckBox>
          </View>
        </View>
        <View style={styles.viewBtn}>
            <Pressable style={styles.btn}>
                <Text style={styles.label}>GENERATE PASSWORD</Text>
            </Pressable>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundImage:
      "radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)",
    padding: 20,
  },

  wrapper: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23235B",
    justifyContent: "center",
    padding: 15,
  },

  viewTitle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  textTitle: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29,
    letterSpacing: 0,
    color: "#FFFFFF",
    textAlign: "center",
  },

  viewTextShowPassword: {
    flex: 1,
    backgroundColor: "#151537",
    justifyContent: "center",
    alignItems: "center",
  },

  textShowPassword: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29,
    letterSpacing: 0,
    color: "#FFFFFF",
    textAlign: "center",
  },

  form:{
    flex: 5,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },

  formRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label:{
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0,
    color: "#FFFFFF",
  },

  txtPasswordLength:{
    backgroundColor:'#FFFFFF',
    width: 118,
    height: 33,
  },

  viewBtn:{
    flex: 1,
    padding: 10,
  },

  btn:{
    flex: 1,
    backgroundColor: '#3B3B98',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
