import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Modal from "./common/Modal";
import Button from "./common/Button";

import colors from "../assets/Colors";
import fonts from "../assets/Fonts";


class HomeScreen extends React.Component {
  constructor() {
      super();
      this.state = {
          modalShown: "none",
          affirmation: ''
      };

      this.toggleModal = this.toggleModal.bind(this);
      this.fetchAffirmation = this.fetchAffirmation.bind(this)
    }

    // type should be "fetch", "display" or "none" (representing no modal shown)
    toggleModal(type) {
      this.setState({
        modalShown: type
      })
    }

    fetchAffirmation() {
      this.setState({
        modalShown: "none",
      })
      const proxyUrl = 'https://cors-anywhere-friends.herokuapp.com/', // this is a hack to get around the CORS block
            targetUrl = 'https://www.affirmations.dev/'

      fetch(proxyUrl + targetUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          affirmation: responseJson.affirmation
        }) 
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>Introduction</Text>
          <Text style={styles.body}>Affirmations are positive statements that can help you to challenge and overcome self-sabotaging and negative thoughts. You can use this overly-convoluted tool to fetch an affirmation for joy and positive change.</Text>

          <Text style={styles.heading}>Step 1: Fetch</Text>
          <Text style={styles.body}>Click the button below to make a request to a remote API and fetch an affirmation.</Text>

          <Button onPress={() => this.toggleModal("fetch")} color={styles.cyan} text="Fetch" />

          <Text style={styles.heading}>Step 1: Display</Text>
          <Text style={styles.body}>Click the button below to display the most recently fetched affirmation.</Text>
          
          <Button onPress={() => this.toggleModal("display")} text="Display" color={styles.cyan} disabled={!this.state.affirmation}/>

        {/* Ideally, I would make impossible states impossible and not allow the possibility of both modals showing */}
          {this.state.modalShown === "fetch" && (
              <Modal 
                onConfirm={this.fetchAffirmation} 
                onCancel={() => this.toggleModal("none")} 
                confirmText="Yes"
                cancelText="No"
                headerText="Fetch?" 
                body="Are you sure you want to fetch an affirmation?" 
              />
            )}

          {this.state.modalShown === "display" && (
              <Modal 
                onCancel={() => this.toggleModal("none")}
                headerText="Affirmation:" 
                body={this.state.affirmation}
              />
            )}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  heading: {
    fontFamily: fonts.medium,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10
  },

  body: {
    fontFamily: fonts.light,
    fontSize: 16,
    marginBottom: 10
  },

  cyan: {
    backgroundColor: colors.cyan
  }
});

export default HomeScreen;