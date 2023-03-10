import React, { useState } from "react";
import Select from 'react-select';

const Contact = () => {
  let countryList=[
    {
      value:1,
      label:"India",
      data:"India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world"
    },
    {
      value:2,
      label:"China",
      data:"局竹動山陸政嫌議応私就広時個省腰助部相。黙革滋社情譜著蔵転製標小選問新合。東最辞引違画証導藤問森力地談少開読。務定表是負就字安献確佐担劇知実。半却査申態青芸速相道乳像自請西格価露活紙。索合台読任質人出監面用況断医前意意。周界川意葉潟通親画書関室碁泉書並手北。局紋設州比減女強感町世有超行方棟区情措。"
    },
    {
      value:3,
      label:"Japan",
      data:"受っぽむわ指聴フレヌシ競料芸彩にンど呼43雄きさ校今エヌワウ月明だイを犠付まそフだ選京17披暑棚豆87披暑棚豆0継むの機空ゃ経組用ーがっろ確喫羅踊ぼきび。量イキ能際うもンど交趣ホムヨ返務んわづ転力がふひイ回需そンぞ父一ワソイ処有けじース紙来ぐみ悦属ん天近ムヌフア帰第幸モ真5俸愚牡獣ラ。臨ヤ売問留ヌリ入分をドずぽ式意エサツ集著レセクソ球住風生ネラム笑取ど奥抱教リ旋歩づよ本苦モニ参番セ子隆ッお。"
    },
    {
      value:4,
      label:"USA",
      data:"Although the United States does not have an official language, the most commonly used language is English (specifically, American English), which is the de facto national language, and the only one spoken at home by approximately 78% of the U.S. population.["
    },
  ]
  const [result,setResult]=useState(countryList.data)
  const countryHandle =(e) =>{
    setResult(e.data)
  }
  return (
    <div>
      <div id="countries">
      <h1>Countries</h1>
      <Select options={countryList} onChange={countryHandle}/>
      <center>
        <h1>{result}</h1>
      </center>
      </div>
    </div>
  );
};

export default Contact;
