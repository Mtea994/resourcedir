const xhttp = new XMLHttpRequest();
let jsondata;
let directories = [];
xhttp.onreadystatechange = function () {
  console.log(this.status, this.readyState);
  if (this.readyState === 4) {
    if (this.status === 200) {
      const json = JSON.parse(xhttp.responseText);
      directories = json.resourceItems;
      console.log(directories);
      jsondata = JSON.stringify(directories);

      console.log(jsondata);
    }
  }
};
xhttp.open("GET", "https://nrd.gov/NRDRestService/search/common");
xhttp.send();

for (let i = 0; i <= directories.length; i++) {
  const parentdiv = document.createElement("div");

  for (let x in directories[i]) {
    const div = document.createElement("div");
    if (x === "addresses") {
      console.log(directories[i].addresses[0]);
      const p = document.createElement("p");
      p.innerHTML = directories[i].addresses[0];
      div.append(p);
      document.body.append(div);
    } else if (x === "audiences") {
      console.log(directories[i].audiences[0]);
      for (let j = 0; j <= directories[i].audiences.length; j++) {
        const p = document.createElement("p");
        p.innerHTML = directories[i].audiences[j];
        div.append(p);
      }
    } else if (x === "description") {
      console.log(directories[i].description);
      const h4 = document.createElement("h4");
      h4.innerHTML = directories[i].description;
      div.append(h4);
    } else if (x === "emailString") {
      console.log(directories[i].emailString);
      const p = document.createElement("p");
      p.innerHTML = directories[i].emailString;
      div.append(p);
    } else if (x === "id") {
      console.log(directories[i].id);
      const p = document.createElement("p");
      p.innerHTML = directories[i].id;
      div.append(p);
    } else if (x === "linkText") {
      console.log(directories[i].linkText);
      const p = document.createElement("p");
      p.innerHTML = directories[i].linkText;
      div.append(p);
    } else if (x === "linkUrl") {
      console.log(directories[i].linkUrl);
      const p = document.createElement("p");
      p.innerHTML = directories[i].linkUrl;
      div.append(p);
    } else if (x === "organizationType") {
      console.log(directories[i].organizationType);
      const p = document.createElement("p");
      p.innerHTML = directories[i].organizationType;
      div.append(p);
    }
    parentdiv.append(div);
  }

  document.body.append(parentdiv);
}
