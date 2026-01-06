import { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">MSW Demo</ThemedText>

      {loading && <ActivityIndicator size="large" style={styles.loader} />}

      {error && <ThemedText style={styles.error}>Error: {error}</ThemedText>}

      {user && (
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">User Data (from MSW)</ThemedText>
          <ThemedText>ID: {user.id}</ThemedText>
          <ThemedText>Name: {user.name}</ThemedText>
          <ThemedText>Email: {user.email}</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
  },
  loader: {
    marginTop: 24,
  },
  error: {
    color: "red",
    marginTop: 16,
  },
  card: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
});
