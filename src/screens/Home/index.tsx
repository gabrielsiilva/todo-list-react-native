import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import Logo from '../../../assets/Logo.svg';
import Clipboard from '../../../assets/Clipboard.svg';
import Plus from '../../../assets/plus.svg';

import { styles } from "./styles";
import { Task } from "../components/Task";

type Task = {
  id: number,
  text: string,
  isFinished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleAddTask() {
    const taskExists = tasks.find(task => task.text === taskName);

    if (taskExists) {
      return Alert.alert('Atenção', 'Já existe uma task com o mesmo título.');
    }

    const newTask = {
      id: new Date().getTime(),
      text: taskName,
      isFinished: false
    };

    setTasks(prevState => [...prevState, newTask]);
    setTaskName('');
  }

  function handleRemoveTask(id: number) {
    return Alert.alert('Remover', `Deseja mesmo remover esta task?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(item => item.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  function handleFinishTask(id: number) {
    setTasks(prevState =>
      prevState.map(item =>
        item.id == id
          ? { id: item.id, text: item.text, isFinished: !item.isFinished }
          : item
      )
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Logo
          width={110}
          height={32}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}
        >
          <Plus width={16} height={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.listDetails}>
        <View style={styles.listDetailsItem}>
          <Text style={styles.createdText}>
            Criadas
          </Text>

          <View style={styles.taskBadge}>
            <Text style={styles.badgeText}>
              {tasks.length}
            </Text>
          </View>
        </View>

        <View style={styles.listDetailsItem}>
          <Text style={styles.finishedText}>
            Concluídas
          </Text>

          <View style={styles.taskBadge}>
            <Text style={styles.badgeText}>
              {tasks.filter(task => task.isFinished).length}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.listContainer}
        data={tasks}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task data={item} onRemove={handleRemoveTask} onFinish={handleFinishTask} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Clipboard width={60} height={60} />

            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyDescription}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />

    </View>
  );
}