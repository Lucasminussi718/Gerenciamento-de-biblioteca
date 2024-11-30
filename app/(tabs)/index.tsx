import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import axios from "axios";
import React from "react";

export default function Home() {
  const [libraryStats, setLibraryStats] = useState(null);

  useEffect(() => {
    const fetchLibraryStats = async () => {
      try {
        const response = await axios.get(
          "https://674a2ed3868020296633e01c.mockapi.io/webmob/api/libraryStats"
        );
        setLibraryStats(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados da biblioteca:", error);
      }
    };

    fetchLibraryStats();
  }, []);

  if (!libraryStats) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando informações da biblioteca...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Gerenciamento da Biblioteca 📚</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Estatísticas:</Text>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total de Livros:</Text>
          <Text style={styles.statValue}>{libraryStats.totalBooks}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total de Autores:</Text>
          <Text style={styles.statValue}>{libraryStats.totalAuthors}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Livros Emprestados:</Text>
          <Text style={styles.statValue}>{libraryStats.borrowedBooks}</Text>
        </View>
      </View>

      <Button title="Adicionar Novo Livro" onPress={() => console.log("Adicionar Livro")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  statsContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    color: "#555",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "#555",
  },
});
