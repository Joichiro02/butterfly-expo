import { Divider } from "@react-native-material/core";
import { StyleSheet } from "react-native";

const DividerContainer = () => {
  return <Divider color="#fff" style={styles.divider} />;
};

export default DividerContainer;

const styles = StyleSheet.create({
  divider: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
