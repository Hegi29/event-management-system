import { StyleSheet } from "react-native";

import { Card, Icon, Input, Text } from "@rneui/themed";

type SearchContainerProps = { title: string };

const SearchContainer = ({ title }: SearchContainerProps) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Text style={styles.title}>Search for {title}</Text>
            <Input placeholder='Search' leftIcon={
                <Icon
                    name='search'
                    size={24}
                    color='grey'
                    containerStyle={styles.iconContainer}
                />
            }
                inputContainerStyle={styles.searchField}
            />
            <Text style={styles.title}>Status</Text>
            <Input placeholder='Status' leftIcon={
                <Icon
                    name='search'
                    size={24}
                    color='grey'
                    containerStyle={styles.iconContainer}
                />
            }
                inputContainerStyle={styles.searchField}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10, padding: 0, paddingTop: 10
    },
    iconContainer: {
        paddingLeft: 10
    },
    searchField: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: -10
    },
    title: {
        marginTop: 5, marginBottom: 0, paddingLeft: 10
    }
});

export default SearchContainer;
