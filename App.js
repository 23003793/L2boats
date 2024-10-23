import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import Boat from "./component/Boat";

const App = () => {
    return (
        <>
            <StatusBar hidden={true} />
            <ScrollView>
                <View>
                    <Boat
                        title="GetABoat - For Sale"
                        icon_name="sailboat"
                        name="SEA RAY 500 SUNDANCER"
                        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                        image={require('./component/img/sea_ray.jpg')}
                    />

                    <Boat
                        icon_name="sailboat"
                        name="FOUR WINNS HORIZON 180"
                        description="A sporty look and refined details truly set the Horizon 180 above all others."
                        image={require('./component/img/four_winns.jpg')}
                    />

                    <Boat
                        icon_name="sailboat"
                        name="FLIPPER 640 ST"
                        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                        image={require('./component/img/flipper.jpg')}
                        />



                </View>
            </ScrollView>
        </>
    );
};

export default App;









