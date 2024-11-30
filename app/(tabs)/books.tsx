import { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import axios from "axios";
import React from "react";

const LivroList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://674a2ed3868020296633e01c.mockapi.io/webmob/api/livro"
      );
      setBooks(response.data || []);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = () => {
    console.log("Adicionar Livro clicado!");
    // Lógica para adicionar um novo livro
  };

  const handleEditBook = (bookId) => {
    console.log(`Editar Livro com ID: ${bookId}`);
    // Lógica para editar o livro
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(
        `https://674a2ed3868020296633e01c.mockapi.io/webmob/api/livro/${bookId}`
      );
      setBooks((prev) => prev.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📚 Lista de Livros 📚</Text>
      <Button title="Adicionar Livro" color="#4CAF50" onPress={handleAddBook} />

      {books.map((book) => (
        <Card key={book.id} style={styles.card}>
          <Card.Title
            title={book.title}
            subtitle={`Autor: ${book.author || "Desconhecido"}`}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="book"
                color="#000"
                style={styles.avatar}
              />
            )}
          />
          <Card.Content>
            <Text style={styles.text}>
              Disponibilidade: {book.isAvailable ? "Disponível" : "Indisponível"}
            </Text>
            <Text style={styles.text}>
              ID: {book.id}
            </Text>
          </Card.Content>
          <Card.Actions>
            <IconButton
              icon="pencil"
              onPress={() => handleEditBook(book.id)}
            />
            <IconButton
              icon="delete"
              onPress={() => handleDeleteBook(book.id)}
            />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

export default LivroList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 24,
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#2c2c2c",
    marginBottom: 16,
    borderRadius: 8,
  },
  avatar: {
    backgroundColor: "#4CAF50",
  },
  text: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 14,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
});
