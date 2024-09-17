import { StyleSheet, Text, View, Image } from "react-native";
import games from "./src/data/games"
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aplicativo de Jogos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
  },
});
