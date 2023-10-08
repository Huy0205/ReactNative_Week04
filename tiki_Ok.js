import { StyleSheet, View, Image, Text, Pressable } from "react-native";

export default function Bai2c() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.productInfor}>
          <View style={styles.topLeft}>
            <Image
              source={require("./assets/book.png")}
              style={styles.imgProduct}
            ></Image>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.font12_Black}>Mã giảm giá đã lưu</Text>
            </View>
          </View>
          <View style={styles.topRight}>
            <Text style={styles.font12_Black}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.font12_Black}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.font18_Red}>141.800 đ</Text>
            <Text>141.800 đ</Text>
            <View style={styles.viewWrapperRowQuantity}>
              <View style={styles.viewQuantity}>
                <Pressable style={styles.btnAdd_Minus}>
                  <Text style={styles.fontQuantity}>-</Text>
                </Pressable>
                <Text style={styles.fontQuantity}>1</Text>
                <Pressable style={styles.btnAdd_Minus}>
                  <Text style={styles.fontQuantity}>+</Text>
                </Pressable>
              </View>
              <View style={styles.viewBuyLater}>
                <Pressable style={styles.btnBuyLater}>
                  <Text style={styles.font12_Blue}>Mua sau</Text>
                </Pressable>
              </View>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Pressable>
                <Text style={styles.font12_Blue}>Xem tại đây</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.viewDiscount}>
          <Pressable style={styles.btnDisCount}>
            <View style={styles.block}></View>
            <Text style={styles.font18_Black}>Mã giảm giá</Text>
          </Pressable>
          <Pressable style={styles.btnApply}>
            <Text style={styles.font20_White}>Áp dụng</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.viewGift}>
        <Text style={styles.font12_Black}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Pressable style={{ marginLeft: 10 }}>
          <Text style={styles.font12_Blue}>Nhập mã tại đây</Text>
        </Pressable>
      </View>
      <View style={styles.viewPriceTemp}>
        <Text style={styles.font18_Black}>Tạm Tính</Text>
        <Text style={styles.font18_Red}>141.800 đ</Text>
      </View>
      <View style={styles.viewBottom}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10 }}>
          <View>
            <Text>Thành tiền</Text>
            <Text>141.800 đ</Text>
          </View>
          <Pressable style={styles.btnOrder}>
            <Text style={styles.font20_White}>TIẾN HÀNH ĐẶT HÀNG</Text>
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
    backgroundColor: "#C4C4C4",
  },

  top: {
    flex: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 0,
  },

  productInfor: {
    flex: 4,
    flexDirection: "row",
  },

  topLeft: {
    justifyContent: "space-between",
    backgroundColor:'red'
  },

  imgProduct: {
    width: 104,
    height: 127,
  },

  font12_Black: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 14,
    letterSpacing: 0,
  },

  font18_Red: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21,
    color: "red",
  },

  font18_Black: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21,
    color: "black",
  },

  font20_White: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0,
    color: "white",
  },

  fontQuantity: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "center",
  },

  font12_Blue: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 14,
    letterSpacing: 0,
    color: "#134FEC",
  },

  topRight: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
  },

  viewWrapperRowQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewQuantity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnAdd_Minus: {
    width: 16,
    height: 16,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },

  viewBuyLater: {
    flex: 2,
    alignItems: "flex-end",
  },

  block: {
    width: 32,
    height: 16,
    backgroundColor: "#F2DD1B",
    marginRight: 10,
  },

  viewDiscount: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
  },

  btnDisCount: {
    flex: 2,
    flexDirection: "row",
    border: "1px solid #808080",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  btnApply: {
    flex: 1,
    backgroundColor: "#0A5EB7",
    justifyContent: "center",
    alignItems: "center",
  },

  viewGift: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  viewPriceTemp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
  },

  viewBottom: {
    flex: 3,
  },

  btnOrder: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
