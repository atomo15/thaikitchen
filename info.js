var Number = ["1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10.", "2", "2.1", "2.2", "2.3", "2.4", "3", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10.", "4", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "5", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "6", "6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7", "6.8", "6.9", "6.10.", "6.11", "6.12", "6.13", "6.14", "6.15", "6.16", "7", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "8", "8.1", "8.2", "8.3", "8.4", "8.5", "9", "9.1", "9.2", "9.3", "9.4"];
var thMenu = ["Appetizers", "Keaw Hor Cheese:", "Kao Kreab Kung: ข้าวเกรียบกุ้ง", "Pot Stickers (6) Fried/Steam", "Kung Hom Pha: กุ้งห่มผ้า", "Pra Muk Tod : ปลาหมึกทอด", "Por Pia Tod : ปอเปี๊ยะทอด", "Kai Satay : ไก่สะเต๊ะ", "Moo Satay : หมูสะเต๊ะ", "Pek Kai Tod : ปีกไก่ทอด", "Ka-Nom-Pak Na-Moo Or Na-Kung : ขนมปังหน้าหมู/ขนมปังหน้ากุ้ง", "Soups", "Tom Yum : ต้มยำ", "Tom Kha : ต้มข่า", "Tom Yum Talay : ต้มยำทะเล", "Tom Yum Ka-dook Onn: ตัมยำกระดูกอ่อน", "Salads + YumAdd Shrimp", "Som Tum : ส้มตำ", "Special: Ask Server", "Yum Woon-Sen: ยำวุ้นเส้น", "Yum Pla Dook Fu : ยำปลาดุกฟู", "Yum Tang-Kwa : ยำแตงกวา / ตำเเตง", "NamTok : น้ำตก", "Larb : ลาบ", "Pla Goong :", "Yum Pla Muk: ยำปลาหมึก", "Special Som Tum +Kai Yang + Sticky Rice", "Fried Rice", "Kao Pad: ข้าวผัด", "Kao Pad Sap-pa-rod: ข้าวผัดสับปะรด", "Kao Pad Ka-pao : ข้าวผัดกะเพรา", "Kao Pad Tom-Yum: ข้าวผัดต้มยำ", "Kao Pad Nham: ข้าวผัดแหนม", "Kao Pad Kang-Keaw-Wan : ข้าวผัดแกงเขียวหวาน", "Noodles", "Pad Thai :ผัดไท", "Pad Thai Ho-Ki : ผัดไทห่อไข่", "Pad Ke-Mao : ผัดขี้เมา", "Pad See Ewe : ผัดซีอิ้ว", "Pad Woonsen : ผัดวุ้นเส้น", "Pra Ram long-Song : พระรามลงสรง", "Pad Ba-Mee Leung : ผัดบะหมี่เหลือง", "Entrées", "Pad Bok Choy: ผัด Bok Choy", "Pad Mad Ma-Mung Him-ma-parn: ผัดมะม่วงหิมพานต์", "Kai Pad Ka-team Prik-Tai : ไก่ผัดกระเทียมพริกไทย", "Pad Puk Rum Mit : ผัดผักรวมมิตร", "Pad Nurn Mongolian: ผัดเนื้อ Mongolian", "Pad Ka Pao : ผัดกระเพรา", "Pra Ram long Song : พระรามลงสรง", "Pad Preaw Wan :  ผัดเปรี้ยวหวาน", "Kai Sam-Rod: ไก่สามรส", "Kao man Kai : ข้าวมันไก่", "Kai Yang: Takes about 15 Min cook time ไก่ย่าง", "Kao moo Dang : ข้าวหมูแดง", "Hor Mook : ห่อหมก", "Nham Ka-Dook Moo : แหนมกระดูกหมู", "Pad Naun Nam-Mun-Hoy : ผัดเนื้อน้ำมันหอย", "beef Broccoli", "Curries", "Kang Keay Whan: แกงเขียวหวาน", "Kang Massa-man : แกงมัสมั่น", "Kang Pa-nang Nearn: แกงแพนงเนื้อ", "Kang Dang: แกงแดง", "Kang Dang Ped : แกงแดงเป็ด", "Kang Fuk Tong: แกงฟักทอง", "Fish", "Pla Rad Prik Kang: ปลาราดพริกแกง", "Pla Sam Rod: ปลาสามรส", "Pla Rad Teriyaki : ปลาราดเทอริยากิ", "Pra Nung Ma-Now: ปลานิ่งมะนาว", "Whole Tilapia This ones worth the wait 15 Min cook time : ปลานิล", "Desserts", "KIuy Tod: กล้วยทอด", "Kao Neaw Mamong: ข้าวเหนี่ยวมะม่วง", "Kao Neaw Sang-Ka-Yha: ข้าวเหนียวสังขยา", "Ice Cream Tod: ไอศครีมทอด"]
var enMenu = ["-", "Crab Rangoon", "Shrimp Crisp Rice Chips", "Pot Stickers (6) Fried/Steam", "Shrimp in a Blanket (5)", "Fried Calamari", "Thai Eggrolls (4)", "Chicken with a Peanut Sauce (3)", "Pork with a Peanut Sauce (3)", "Chicken Wing in a Spicy Sauce (6)", "Fried Bread with Mince Pork Or Shrimp Spread", "-", "Traditional Thai Hot and Soup", "Traditional Thai Creamy coconut", "Seafood Soup", "Thai Soup with Pork Ribs", "$3Best with Sticky rice", "Papaya Salad Thai Style Or E-san Style", "-", "Glass Noodle Salad/w Ground Pork", "Cat Fish Salad", "Cucumber Salad", "Boil Beef Salad Thai Style", "Ground Pork Salad Thai Style", "Shrimp Salad Thai Style", "Squid Salad Thai Style", "-", "Choose Chicken,Pork, Beef,TOFU AddShrimp $3", "Thai Fried Rice", "Pineapple Fried Rice", "Basil Fried Rice", "Tom Yum Fried Rice", "Pork Preserve Fried Rice", "Green Curry Fried Rice", "Choose Chicken,Beef, Pork, TOFU. Add Shrimp $3", "Traditional Thai Stir-Fry Noodle", "Thai Stir-Fry Noodle omelet", "Stir-Fry Drunken Noodle", "Stir-Fry Noodle /w Sweet Soy", "Stir-Fry Glass Noddle", "Rama Noodle/ Wide noodle", "Stir-Fry Yellow Noodle", "Choose: Chicken, Beef, Pork, TOFU. Add Shrimp $3", "Bok Choy Stir-Fry (Vegetarian)", "Cashew Chicken", "Garlic Chicken", "Mix Vegetable Deluxe", "Mongolian Beef", "Basil Stir-Fry", "Rama Chicken/w Rice", "Sweet and Sour", "Chicken with a Spicy and Sour Sauce", "Thai Steam Chicken With Rice", "Grilled Chicken with Lemongrass + Sticky Rice", "Red Pork With Rice", "Steam Fish in Curry Sauce", "Fried Preserve Pork Rib", "Beef Oyster", "beef Broccoli", "Choose Beef, Pork, TOfu, Chicken. Add Shrimp $3", "Green Curry", "Massa man Curry", "Panang Beef Only", "Red Curry", "Roasted Duck in Red Curry", "Pumpkin in Red Curry", "Choice of Fillet : Salmon, Tilapia, Catfish,", "Fish in Red Curry", "Fish in Sweet and Sour Sauce", "Fish in Teriyaki Sauce", "Fish Stream with Lemon and Garlic", "-", "-", "Fried Banana", "Mango and Sticky Rice", "Sticky Rice with Eggs Custard", "Fried Ice Cream"]
var option_number = "";

function show() {
    var x = document.getElementById("detail");
    //console.log(Number)
    var i = 0;
    var output = "";
    while (Number[i] != null) {
        if (Number[i].includes(".")) {
            output = output + Number[i] + "<br>";
            option_number = option_number + '<option value="' + Number[i] + '">' + Number[i] + '</option>'
        }
        i++;
    }
    x.innerHTML = '<select class="custom-select" id="numberoption" onchange="findbynumber()">' + option_number + "</select>";
}

function findbynumber() {
    var x = document.getElementById("numberoption").value;
    var y = document.getElementById("diaplaymenu");
    var index = 0;
    var check = 0;
    var result = "";
    while (thMenu[index] != null) {
        if (x == Number[index] && x.includes(".")) {
            //console.log(x + " " + thMenu[index]);
            result = result + '<h2 style="background-color: orange;">' + thMenu[index] + "</h2>";
            result = result + '<h2 style="background-color: orange;">' + enMenu[index] + "</h2><br>";
            check = 1;
        }
        index += 1;
    }

    if (check == 0) {
        y.innerHTML = "<h6>No Result</h6>";
    } else {
        // console.log(result)
        y.innerHTML = result;
    }

    //console.log(x);
}