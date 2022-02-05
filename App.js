import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const [save, setSave] = useState(true);
  const animation = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      if (save) {
        animation.current.play(94, 94);
      } else {
        animation.current.play(7, 7);
      }

      firstRun.current = false;
    } else if (save) {
      animation.current.play(0, 94);
    } else {
      animation.current.play(94, 7);
    }
  }, [save]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSave(!save)}>
        <LottieView
          source={require("./src/assets/bookmark.json")}
          autoPlay={false}
          loop={false}
          style={{ width: 200, height: 200 }}
          resizeMode="cover"
          ref={animation}
        />
      </TouchableOpacity>
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
});
