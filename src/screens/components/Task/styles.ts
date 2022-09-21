import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 8,
    height: 74,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
  },
  text: {
    color: '#f2f2f2',
    width: '100%',
    flex: 1
  },
  doneText: {
    color: '#808080',
    width: '100%',
    flex: 1,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  button: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  doneButton: {
    borderRadius: 10,
    width: 20,
    height: 20,
    borderColor: '#4EA8DE',
    borderWidth: 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    borderRadius: 10,
    width: 20,
    height: 20,
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center',
  }
});