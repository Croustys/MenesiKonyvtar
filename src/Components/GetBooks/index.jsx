import React, { Component } from "react";
import axios from "axios";
import Card from "./Card/Card";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";

import { BoxLoading } from 'react-loadingg';

export default class getBooks extends Component {
  state = {
    stateData: [],
    searchWord: "",
    basedSearch: 1,
  };
  componentDidMount() {
    this.getData();
  }
  async getData() {
    //basic fetch of the DB
    try {
      const res = await axios.get("http://localhost:5000/books");
      const data = await res.data;

      this.setState({ stateData: data });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    //console.log(this.state.stateData); //Fetch testing line for dev
  }

  handleClick(num) {
    const buttons = document.querySelectorAll(".btn-chosen");

    //rlly bad way to change classnames but w/e
    buttons.forEach((button) => {
      button.classList.remove("btn-chosen");
      button.className = "btn-sw btn btn-primary";
    });

    const buttonToChange = document.getElementById(num);

    buttonToChange.className = "btn-chosen btn primary";

    this.setState({ basedSearch: num });
  }

  render() {
    //Filters upon entering anything into search bar and re-renders
    const filteredData = this.state.stateData.filter((book) => {
      const searchBase = this.state.basedSearch;
      if (searchBase === 1)
        return book.Name ? book.Name.includes(this.state.searchWord) : false;
      else if (searchBase === 2) {
        return book.Writer
          ? book.Writer.includes(this.state.searchWord)
          : false;
      } else
        return book.Publisher
          ? book.Publisher.includes(this.state.searchWord)
          : false;
    });
    if (this.state.stateData.length === 0) return ( <BoxLoading /> )
    return (
      <>
        <h1 className="header">Books</h1>
        <h1>Search based on:</h1>

        <Button className="btn-sw" onClick={() => this.handleClick(1)} id="1">
          Names
        </Button>
        <Button className="btn-sw" onClick={() => this.handleClick(2)} id="2">
          Writer
        </Button>
        <Button className="btn-sw" onClick={() => this.handleClick(3)} id="3">
          Publisher
        </Button>
        <Form>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.setState({ searchWord: e.target.value })}
          />
        </Form>
        <div className="wrapper">
          {filteredData.map((item, key) => (
            <Card
              key={key}
              Publisher={item.Publisher}
              Name={item.Name}
              Writer={item.Writer}
            />
          ))}
        </div>
      </>
    );
  }
}

/* const da = [
  {
    _id: 1,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Biblia",
    Amount: 3,
    Price: 2.4,
    Value: 7.2,
  },
  {
    _id: 221312312321,
    Publisher: "Magyar Bibliatársulat",
    Writer: "",
    Name: "Szent Biblia",
    Amount: 3,
    Price: 1.7,
    Value: 5.1,
  },
  {
    _id: 3,
    Publisher: "Bethania CE Szövetség",
    Writer: "",
    Name: "HALLELUJAH evangéliumi énekek",
    Amount: 12,
    Price: null,
    Value: 0,
  },
  {
    _id: 4,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Énekeskönyv",
    Amount: 1,
    Price: 1.8,
    Value: 1.8,
  },
  {
    _id: 5,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Énekeskönyv",
    Amount: 5,
    Price: 1.05,
    Value: 5.25,
  },
  {
    _id: 6,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Énekeskönyv",
    Amount: 4,
    Price: 900,
    Value: 3.6,
  },
  {
    _id: 7,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Énekeskönyv",
    Amount: 4,
    Price: 790,
    Value: 3.16,
  },
  {
    _id: 8,
    Publisher: "Evangéliumi Kiadó",
    Writer: "",
    Name: "Így keletkezett a Biblia",
    Amount: 1,
    Price: 800,
    Value: 800,
  },
  {
    _id: 9,
    Publisher: "Evangéliumi Kiadó",
    Writer: "",
    Name: "Újszövetség",
    Amount: 1,
    Price: 690,
    Value: 690,
  },
  {
    _id: 10,
    Publisher: "Evangéliumi Kiadó",
    Writer: "dr A. Van Deursen",
    Name: "A biblia világa képekben",
    Amount: 1,
    Price: null,
    Value: 0,
  },
  {
    _id: 11,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Arend Remmers",
    Name: "A biblia képei és szimbolumai",
    Amount: 1,
    Price: null,
    Value: 0,
  },
  {
    _id: 12,
    Publisher: "Evangéliumi Kiadó",
    Writer: "",
    Name: "Példázatok igaz történetek",
    Amount: 1,
    Price: 600,
    Value: 600,
  },
  {
    _id: 13,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Carl Eichhorn",
    Name: "Isten műhelyében",
    Amount: 1,
    Price: 1,
    Value: 1,
  },
  {
    _id: 14,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Liza Trautsch",
    Name: "…Beszéded megelevenít",
    Amount: 1,
    Price: 1,
    Value: 1,
  },
  {
    _id: 15,
    Publisher: "Evangéliumi Kiadó",
    Writer: "C. H. Spurgeon",
    Name: "Isten ígéreteinek tárháza",
    Amount: 2,
    Price: 1,
    Value: 2,
  },
  {
    _id: 16,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Muraközi Gyula",
    Name: "A Sionnak hegyén",
    Amount: 1,
    Price: 310,
    Value: 310,
  },
  {
    _id: 17,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Mindennapi kenyerünk",
    Amount: 4,
    Price: 245,
    Value: 980,
  },
  {
    _id: 18,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "",
    Name: "Mindennapi kenyerünk",
    Amount: 3,
    Price: 250,
    Value: 750,
  },
  {
    _id: 19,
    Publisher: "Harmat kiadó",
    Writer: "Miklya Luzsányi Mónika",
    Name: "Az igazak útján",
    Amount: 2,
    Price: 1.5,
    Value: 3,
  },
  {
    _id: 20,
    Publisher: "Erdélyi Református Egyház",
    Writer: "Csiha Kálmán",
    Name: "Az igehirdetés dialektikája",
    Amount: 1,
    Price: 1.2,
    Value: 1.2,
  },
  {
    _id: 21,
    Publisher: "Erdélyi Református Egyház",
    Writer: "Csiha Kálmánné",
    Name: "Angyalok, örömszerzők, bűnösök",
    Amount: 1,
    Price: 1.5,
    Value: 1.5,
  },
  {
    _id: 22,
    Publisher: "Erdélyi Református Egyház",
    Writer: "Csiha Kálmánné",
    Name: "Kiáltottam, meghallgattak",
    Amount: 2,
    Price: 850,
    Value: 1.7,
  },
  {
    _id: 23,
    Publisher: "Éjféli Kiáltás Missziós Nyomda",
    Writer: "",
    Name:
      "Legyen az életkora 120 esztendő\t1\t450\t450\n24.\tCERBERUS Kiadó\tdr Erdélyi Judit - Kalmár Sándor\tEvangéliumi ösvény\t2\t\t0\n25.\tEvangéliumi Kiadó\tHans Brandenburg\tA hitélet gyermekbetegségei\t1\t500\t500\n26.\tEvangéliumi Kiadó\tC. H. Spurgeon\tAz Úr gondot visel\t1\t300\t300\n27.\tEvangéliumi Kiadó\tC. H. Spurgeon\tElvégeztetett\t1\t600\t600\n28.\tEvangéliumi Kiadó\tJoachim Langhammer\tMit hoz a jövő ?\t1\t600\t600\n29.\tMakai+Makai Kft.\tH. L. Heikoop\tIsten gyülekezetei\t1\t300\t300\n30.\tMagyar Református Egyház Kálvin kiadó\tPeter Spangenberg\tKicsinyek nagy kérdései\t1\t950\t950\n31.\tMagyar Református Egyház Kálvin kiadó\tKurt Hennig\tIsten igéje elkísér\t1\t260\t260\n32.\tMagyar Református Egyház Kálvin kiadó\tG.A.F.  Knight\tKeresztyén hitünk középpontja\t1\t820\t820\n33.\tMagyar Református Egyház Kálvin kiadó\tHolger Finze-Michalsen\tMiatyánk felfedezése\t1\t1.400\t1.400\n34.\tKOINONIA (Kolozsvár) \tVisky Ferenc\tEgyház és szenvedés\t1\t280\t280\n35.\tEvangéliumi Kiadó\tFarkas Zoltán\tFoglyok angyala\t1\t1.000\t1.000\n36.\tÉjféli Kiáltás Missziós Nyomda\t\tA fáraó útlevelei\t1\t200\t200\n37.\tBp. Pasaréti Református Egyház\tVarga Róbert \tKik a boldogok ?\t1\t410\t410\n38.\tBp. Pasaréti Református Egyház\tVarga Róbert \tLázár feltámasztása\t1\t360\t360\n39.\tBp. Pasaréti Református Egyház\tCseri Kálmán\tMit hoz a jövő ?\t2\t\t0\n40.\tBp. Pasaréti Református Egyház\tCseri Kálmán\tFölkelvén hazamennek\t1\t360\t360\n41.\tBp. Pasaréti Református Egyház\tCseri Kálmán\tJósáfát\t1\t530\t530\n42.\tBp. Pasaréti Református Egyház\tCseri Kálmán\tJónás\t1\t340\t340\n43.\tBp. Pasaréti Református Egyház\tCseri Kálmán\tNoé Istennel járt\t1\t300\t300\n44.\tBp. Pasaréti Református Egyház\tCseri Kálmán\tMinek az ünnepe karácsony ?\t1\t120\t120\n45.\tBp. Pasaréti Református Egyház\tFarkas Zoltán\tJézus imádságai\t1\t390\t390\n46.\tReformátus Zsinati Iroda\tdr Békési Gábor\tAki győz\t1\t70\t70\n47.\tReformátus Zsinati Iroda\tBolyki János\tKi a mi Istenünk ?\t1\t48\t48\n48.\tReformátus Zsinati Iroda\tSarkadi Nagy Pál\tA miatyánk\t1\t50\t50\n49.\tMagyar Református Egyház Kálvin kiadó\tLucas Vischer\tA világot átfogó református család\t1\t350\t350\n50.\tPápai Református Teológus Akadémia\tdr Szabó Előd\tSzázesztendős kalendárium\t1\t560\t560\n51.\t\tM. Basilea Schlink\tKiáltás az éjszakában\t1\t560\t560\n52.\tHERMENEUTIKAI Kutatóközpont\tLuther Márton\tHogyan szemléljük ?\t2\t735\t1.470\n53.\tRO-LA\tCseri Kálmán\tA négyküllős kerék\t1\t\t0\n54.\tVeresegyház\tFukk Lóránd\tHetvenszer hétszer is\t5\t1.000\t5.000\n55.\tMagyar Református Egyház Kálvin kiadó\tMolnár Miklós\t",
    Amount: 1,
    Price: 380,
    Value: 380,
  },
  {
    _id: 56,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Papp Vilmos",
    Name: "Az egyetemes papság",
    Amount: 5,
    Price: 390,
    Value: 1.95,
  },
  {
    _id: 57,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Horváth Bence ",
    Name: "Utolsó idők",
    Amount: 3,
    Price: 350,
    Value: 1.05,
  },
  {
    _id: 58,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Lucas Vischer",
    Name: "Kálvin öröksége",
    Amount: 4,
    Price: 380,
    Value: 1.52,
  },
  {
    _id: 59,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "dr Nagy Tibor ",
    Name: "Örök kérdések - mai válaszok",
    Amount: 6,
    Price: 170,
    Value: 1.02,
  },
  {
    _id: 60,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Tegez Lajos",
    Name:
      "Bizony ……….. a nagy keserűség\t5\t55\t275\n61.\tMagyar Református Egyház Kálvin kiadó\tTegez Lajos\t",
    Amount: 1,
    Price: 90,
    Value: 90,
  },
  {
    _id: 62,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Tegez Lajos",
    Name: "Derék asszonyt, derék férfit kicsoda találhat?",
    Amount: 2,
    Price: 210,
    Value: 420,
  },
  {
    _id: 63,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Tegez Lajos",
    Name: "Eljövök és magam mellé veszlek",
    Amount: 1,
    Price: 100,
    Value: 100,
  },
  {
    _id: 64,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Tegez Lajos",
    Name: "A halál árnyéka völgyében",
    Amount: 11,
    Price: 150,
    Value: 1.65,
  },
  {
    _id: 65,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Inge Wende",
    Name: "Életem félelem és reménység között",
    Amount: 4,
    Price: null,
    Value: 0,
  },
  {
    _id: 66,
    Publisher: "Evangéliumi Kiadó",
    Writer: "W. Schippers",
    Name: "A hajósgazda fia",
    Amount: 2,
    Price: 500,
    Value: 1,
  },
  {
    _id: 67,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Lois Bittler",
    Name: "Vedd és olvasd",
    Amount: 2,
    Price: 800,
    Value: 1.6,
  },
  {
    _id: 68,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Roy Krisztina",
    Name: "Isten nélkül a világban",
    Amount: 1,
    Price: 300,
    Value: 300,
  },
  {
    _id: 69,
    Publisher: "Evangéliumi Kiadó",
    Writer: "",
    Name: "Lámpás az úton",
    Amount: 2,
    Price: 1,
    Value: 2,
  },
  {
    _id: 70,
    Publisher: "Evangéliumi Kiadó",
    Writer: "",
    Name: "Jöjj számoljuk meg a csillagokat",
    Amount: 2,
    Price: 300,
    Value: 600,
  },
  {
    _id: 71,
    Publisher: "Evangéliumi Kiadó",
    Writer: "William L. Colemann ",
    Name: "Védjük meg a malmot",
    Amount: 2,
    Price: 600,
    Value: 1.2,
  },
  {
    _id: 72,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Esther Secretar",
    Name: "Szivárványország",
    Amount: 2,
    Price: 600,
    Value: 1.2,
  },
  {
    _id: 73,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Gudrum Wagner",
    Name: "István tarts ki",
    Amount: 2,
    Price: 500,
    Value: 1,
  },
  {
    _id: 74,
    Publisher: "Evangéliumi Kiadó",
    Writer: "Lukátsi Vilma",
    Name: "A piros szíves kéz",
    Amount: 2,
    Price: 600,
    Value: 1.2,
  },
  {
    _id: 75,
    Publisher: "Evangéliumi Kiadó",
    Writer: "M. L. Taylor",
    Name: "Kis zarándok vándorútja",
    Amount: 2,
    Price: 500,
    Value: 1,
  },
  {
    _id: 76,
    Publisher: "Harmat kiadó",
    Writer: "C. S. Lewis",
    Name: "Csűrcsavar levelei",
    Amount: 1,
    Price: 990,
    Value: 990,
  },
  {
    _id: 77,
    Publisher: "Szent Gellért Kiadó",
    Writer: "Jacek Micielski",
    Name: "Életrevaló gyerekek",
    Amount: 1,
    Price: 890,
    Value: 890,
  },
  {
    _id: 78,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Gyökössy Endre",
    Name: "Hogyan tartsunk gyermek bibliaórát",
    Amount: 1,
    Price: 600,
    Value: 600,
  },
  {
    _id: 79,
    Publisher: "Magyar Református Egyház Kálvin kiadó",
    Writer: "Farkas Jánosné",
    Name: "Most már látlak",
    Amount: 1,
    Price: 600,
    Value: 600,
  },
  {
    _id: 80,
    Publisher: "Éjféli Kiáltás Missziós Nyomda",
    Writer: "dr Pálhegyi Ferenc",
    Name: "Szex és szerelem",
    Amount: 3,
    Price: 450,
    Value: 1.35,
  },
  {
    _id: 81,
    Publisher: "Éjféli Kiáltás Missziós Nyomda",
    Writer: "Sipos Ete Álmos",
    Name: "Ne légy házasságtörő",
    Amount: 1,
    Price: 440,
    Value: 440,
  },
  {
    _id: 82,
    Publisher: "",
    Writer: "",
    Name: "Ez igaz",
    Amount: 2,
    Price: 300,
    Value: 600,
  },
  {
    _id: 83,
    Publisher: "Evangéliumi Kiadó",
    Writer: "",
    Name: "Kifestőkönyv",
    Amount: 2,
    Price: 300,
    Value: 600,
  },
  {
    _id: 84,
    Publisher: "",
    Writer: "",
    Name: "Kifestőkönyv",
    Amount: 3,
    Price: 150,
    Value: 450,
  },
  {
    _id: 85,
    Publisher: "",
    Writer: "",
    Name: "Úton az Úr Jézussal",
    Amount: 2,
    Price: 300,
    Value: 600,
  },
]; */
