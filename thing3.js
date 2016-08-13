const https = require('https');
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const apikey = "d3a29a2e27b04abd8f15260942e362d9";

var q="&q="+process.argv[2];
var fl="&fl=web_url,headline,snippet,multimedia"
var search = url+apikey+q+fl;
var data=[];
https.get(search, (response) => {
  response.setEncoding('utf8');
  response.on('data',(chunk)=>{
    data.push(chunk);

  }).on('end', function(){
    data = (JSON.parse(data));
    console.log(data)
    // data = data.join('');
    data.response.docs.reduce((prev,curr)=>{
      console.log(curr.web_url+'\n',curr.headline.main+'\n',curr.snippet+'\n\n');
    },[]);
  })
});
