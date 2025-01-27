import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import List from "./screens/List";
import Contact from "./screens/Contact";
import TabIcon from "./components/TabIcon";

class App extends Component {
    render() {
        return (
            <Router>
                <Stack tabs={true}>
                    <Scene
                        key="Home"
                        component={Home}
                        title="Home"
                        icon={TabIcon}
                        iconName={"home"}
                    />
                    <Scene
                        key="Gallery"
                        component={Gallery}
                        title="Gallery"
                        icon={TabIcon}
                        iconName={"image"}
                    />
                    <Scene
                        key="List"
                        component={List}
                        title="List"
                        icon={TabIcon}
                        iconName={"list"}
                    />
                    <Scene
                        key="Contact"
                        component={Contact}
                        title="Contact"
                        icon={TabIcon}
                        iconName={"contact"}
                    />
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        backgroundColor: "#ecf0f1"
    }
});

export default App;
