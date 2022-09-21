import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Trash from '../../../../assets/trash.svg';
import Check from '../../../../assets/check.svg';

import { styles } from "./styles";

type Task = {
  id: number,
  text: string,
  isFinished: boolean
}

type TaskProps = {
  data: Task,
  onRemove: (id: number) => void,
  onFinish: (id: number) => void
}

export function Task({ data, onRemove, onFinish }: TaskProps) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onFinish(data.id)}
        >
          <View style={styles.doneButton}>
            {data.isFinished && (
              <View style={styles.marker}>
                <Check
                  height={12}
                  width={12}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>

        <Text style={data.isFinished ? styles.doneText : styles.text}>
          {data.text}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onRemove(data.id)}
        >
          <Trash width={40} height={40} />
        </TouchableOpacity>
      </View>
    </>
  );
}