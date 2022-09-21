import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  logoContainer: {
    width: '100%',
    height: 200,
    marginBottom: -28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D'
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 32
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 52,
    borderRadius: 6,
    padding: 16,
    color: '#F2F2F2',
    marginRight: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  listDetailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700'
  },
  taskBadge: {
    backgroundColor: '#333333',
    width: 25,
    height: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },
  badgeText: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700'
  },
  finishedText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: '700'
  },
  listContainer: {
    marginHorizontal: 24,
  },
  emptyList: {
    borderTopColor: '#333333',
    paddingTop: 34,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: '700',
    color: '#808080',
  },
  emptyDescription: {
    fontSize: 14,
    color: '#808080',
  },
});