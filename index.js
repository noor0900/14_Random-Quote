const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
     

    let lines = ["The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
        "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
         "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
         "The best revenge is massive success. - Frank Sinatra",
         "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
         "Success is not in what you have, but who you are. - Bo Bennett",
         "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson"
    ];
    
    let random = Math.floor(Math.random() * lines.length);
    document.querySelector(".randomquote p").innerText = lines[random];

});