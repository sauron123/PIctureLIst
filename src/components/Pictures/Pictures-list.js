import React, { Component } from 'react';

// interogation des API externe , pour consommer web service (like fetch ) (observable en angular)
import axios from 'axios';

import PictureItem from './Picture-item/Picture-item';

class PicturesList extends Component {
    // statefull component on peut utiliser constructor and life cycle de react : render ...

    // lifecycle constracter =>setState =>  =>  render=>  componentDidmount

    //lors de la consommation API axios ou fetch il faut utiliser componentDidMount()
    state = {
        pictures: [] // contiendra lensemble des object // tableau d'URL (objet json )  des des images
      }
     urlSrc = 'https://picsum.photos';

     // limit of number of pictures
     limitList = 20; // on peut modifier ca en utilisant une interface  : on peut creer input balise et son 'valeur='  lance render
    // une autre fois et la variable limiteListe sera dans state pour qu'elle se charge a chaque fois dans render()
//limitlist en state pour modifier render component
  componentDidMount() { // chaque interogation avec web service doit etre implementer dans componentDidMount()
        axios.get(`${this.urlSrc}/list`) //nouveau syntaxe pour chaine de caratere tt comme concatenation avec +
          .then(res => { //then : pour lancement
              // et res: Obj retour principale contient tout les donnees et reponse de la requette et indiaue s'il ya des errur et succes ...
            const pictures = res.data.slice(1,this.limitList - 1); // nos donnes dans .data // .slice donne ou commencer 1 => 20
            this.setState({ pictures }); // faut faire recheche sur slice// picture est une variable variable
          })
      // {picture } c 'est comme picture : picture en JSX nouvel generation // setState utiliser en render() car chaque fois en setState on change pas tt
      //on change seulemet l'element specifique
      }
      //picture  is now full of info

  render() { //life cycle: retour render after setState
      // Parse List Picutres
      //on a ces deux ligne au dessous :  si on a toujours d autre des modif il vaut mieux on les met dans render comme ***
    const pictureListItems = this.state.pictures.map((item, index) => { //deux arg : 1er refer elem  Item parse elm par elm et index optional de tableau
         return <PictureItem key={'index'+index} urlPicture = {this.urlSrc + '/' + item.width + '/' + item.height + '?image=' + item.id} /> ;
    }); //map rend une copie en une autre format
      //map en js non necesairement tout les elements de meme type (ps donne une copie c pourquoi en utilise en immutable)
//map pour faire copie de tableau et travaille ton fonctionalite
      //map convertie en une format :  objet json dans notre cas qui est seulemet url : url  en un ensemble de component <PictureItem> ,
      // item = tab[i] , objet json dans notre cas qui est seulemet url : url
      // API ; objet d'image json retourner , que fede a enoyer
    return (
        // {pictureItem}
        // pour retourner de element at the same level : on utilise react.Fragment
        //react fragment : balise parent , si tu l'enleve il aura erreur car <div> et <h1> meme niveau
        <React.Fragment>
        <h1 className="title-pictures-list"> List of Pictures</h1>
        <div className="container">
            <div className="row">
                {pictureListItems}
            </div>
        </div>
        </React.Fragment>
    );
  }

}

export default PicturesList;
//THIS.STATE. pictureListItems = this.state.pictures.map((item, index) => {
//return <PictureItem key={index} urlPicture = {this.urlSrc + '/' + item.width + '  &*******
//au lieu de {pictureListItems} in the final  return ()