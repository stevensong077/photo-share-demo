import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 15,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 35,
    margin: 20,
  },
  button: {
    backgroundColor: "#666666",
    padding: 15,
    margin:8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
  thumbnail: {
    width: 500,
    height: 500,
    resizeMode: "contain",
    margin: 20,
  },
});

export default styles;
