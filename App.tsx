import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import games from "./src/data/games"
import React, { useState } from 'react';

export default function App() {
  const [ search, setSearch ] = useState('');
  const [ gameFilter, setGameFilter ] = useState(games);

  const filterGames = (text: string) => {
    setSearch(text);
    if (text) {
      const fGames = games.filter((game) => 
        game.name.toLowerCase().includes(text.toLowerCase())
      );
      setGameFilter(fGames);
    } else {
      setGameFilter(games);
    }
  };


  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <Text style={styles.headerText}>Super Games Station</Text>
          <TextInput
            style={styles.search}
            placeholder="Pesquisar jogos..."
            value={search}
            onChangeText={filterGames}
          />
      </View>

      <FlatList
        data={gameFilter.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => (null)}>
            <View style={styles.card}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text style={styles.title}>{item.name}</Text>
              <View>
                <Text style={styles.info}>Plataforma: {item.platform}</Text>
                <Text style={styles.info}>Gênero: {item.genre}</Text>
                <Text style={styles.info}>Data de lançamento: {item.releaseDate}</Text>
                <Text style={styles.info}>Classificação: {item.rating}</Text>
                <Text style={styles.info}>Desenvolvedora: {item.developer}</Text>
                <Text style={styles.info}>Nota: {item.ratingScore} Estrelas</Text>
              </View>
            </View>
          </TouchableOpacity>           
        )}
      />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>2024 - Fernando Dreyer Radünz</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#4783ff',
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    backgroundColor: '#3E6FD3',
    marginTop: 30,
    borderRadius: 10,
    padding: 5,
    fontWeight: 'bold',
  },
  search: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffeeca",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    borderRadius: 10,
    width: 355,
    height: 220,
  },
  card: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 10,
    borderRadius: 12,
    marginHorizontal: 1,
    backgroundColor: '#c1a875',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  info: {
    fontSize: 11,
    color: '#fff',
  },
  footer: {
    backgroundColor: '#4783ff',
    padding: 10,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },

});
