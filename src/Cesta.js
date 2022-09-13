import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topImage from '../assets/topo.png'
import logoImage from '../assets/logo.png'

const widthFromScreen = Dimensions.get('screen').width;

export default function Cesta() {
    /*  <> - Isto é um fragmento, usado somente para agrupar outros componentes,
        pois, sem isso, o RN não entende o retorno de mais de um componente,
        assim, não necessitando colocar uma VIEW, uma outra camada. */
    return <>
        <Image source={topImage} style={estilos.topImage}/>
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>
        
        <View style={estilos.cesto}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            
            <View style={estilos.fazenda}>
                <Image source={logoImage} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            
            <Text style={estilos.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda para sua cozinha.
            </Text>
            <Text style={estilos.preco}>10€</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topImage: {
        width: '100%',
        height: 578 / 768 * widthFromScreen, /* heightFromImage / widthFromImage * widthFromScreen */
        fontFamily: 'Montserrat'
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
    cesto: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row', /* The direction text is laid out in a line */
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        lineHeight: 26,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});