import { StyleSheet, View } from "react-native";

import { Card, Icon, Input, Text } from "@rneui/themed";

import SelectCustom from "../components/SelectCustom";

type SearchContainerProps = { title: string, setSelectedStatus: any, setSelectedSearch: any };

const IconSearch = () => {
    return (
        <Icon
            name='search'
            size={24}
            color='grey'
            containerStyle={styles.iconContainer}
        />
    )
}

const FilterSearch = ({ setSelectedSearch, title }: any) => {
    const onChangeSearch = (value: any) => {
        setSelectedSearch(value);
    }

    return (
        <>
            <Text style={styles.title}>Search for {title}</Text>
            <Input placeholder='Search' leftIcon={<IconSearch />}
                inputContainerStyle={styles.searchField}
                onChangeText={value => onChangeSearch(value)}
            />
        </>
    )
}

const FilterStatus = ({ setSelectedStatus, title }: any) => {
    return (
        <>
            <Text style={styles.title}>Status</Text>
            <View style={{ paddingHorizontal: 10 }}>
                <SelectCustom setSelectedStatus={setSelectedStatus} title={title}/>
            </View>
        </>
    )
}

const SearchContainer = ({ title, setSelectedStatus, setSelectedSearch }: SearchContainerProps) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={{ paddingTop: 5, marginBottom: -10 }}>
                <FilterSearch setSelectedSearch={setSelectedSearch} title={title} />
            </View>
            <FilterStatus setSelectedStatus={setSelectedStatus} title={title}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        padding: 5,
        height: 195
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
        marginTop: 5,
        marginBottom: 0,
        paddingLeft: 10
    }
});

export default SearchContainer;
