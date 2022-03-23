const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject); const prophets = jsonObject['prophets'];  // temporary checking for valid response and data parsing
        for (let i = 0; i < prophets.length; i++ ) {
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let birthdayP = document.createElement('p');
          birthdayP.textContent = "Date of Birth:" + ' ' + prophets[i].birthdate;
          let birthplace = document.createElement('p');
          birthplace.textContent = "Birthplace:" + ' ' +  prophets[i].birthplace;
          h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
          let numofchildren = document.createElement('p');
          numofchildren.textContent = "Children:" + ' ' + prophets[i].numofchildren;
          let death =document.createElement('p');
          death.textContent = "Death:" + ' ' +  prophets[i].death;
          let order = document.createElement('p');
          order.textContent = "Order:" + ' ' + prophets[i].order;
          let length = document.createElement('p');
          length.textContent = "Number of Length:" + ' ' + prophets[i].length;
          let image = document.createElement('img');
          image.setAttribute('src', prophets[i].imageurl);
          image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' -' + prophets[i].order);
          card.appendChild(h2);
          card.append(birthdayP);
          card.append(birthplace);
          card.appendChild(numofchildren);
          card.append(death);
          card.append(order);
          card.append(length);
          card.appendChild(image);
          document.querySelector('div.cards').appendChild(card);

        }
        //image.setAttribute('src', prophets[i].imageurl);
      });

  const rURL = 'https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial';

  fetch(rURL)
      .then(function (respond){
        return respond.json();
      })
      .then(function (JSON) {
        console.table(JSON); const weather = JSON['weather'];
        for(let w = 0; w < weather.length; w--) {
          document.querySelector('div.weathersite').appendChild(card);
        }
      });
