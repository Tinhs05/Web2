//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [
        {
                id: 0,
                status: 0, 
                title: '',
                img: '',
                imghv: '',
                category: '',
                sizeS: '',
                sizeM: '',
                sizeL: '',
                sizeXL: '',
                price: '',
                desc: ''
        },
            {
            id: 1,
            status: 1, 
            title: 'BUCKLE LIPS TEE',
            img: './assets/image/BUCKLE LIPS TEE.png',
            imghv: './assets/image/BUCKLE LIPS TEE - hover.webp',
            category: 'Áo Thun',
            sizeS: 45,
            sizeM: 30,
            sizeL: 35,
            sizeXL:40,
            price: 360000,
            newprice:'',
            desc: 'Form basic mới\n Áo bo cổ \nThiết kế 2 line dọc theo vai áo\n Hoạ tiết chữ mặt trước sử dụng kỹ thuật thêu nổi\n Nameplate inox đính ở mặt sau áo\n Chất liệu: Cotton 2 chiều'
        },
        {
            id: 2,
            status: 1, 
            title: 'OCEAN MEDITATION BOXY',
            img: './assets/image/OCEAN MEDITATION BOXY TEE.png',
            imghv: './assets/image/OCEAN MEDITATION BOXY TEE-Hover.webp',
            category: 'Áo Thun',
            sizeS: 35,
            sizeM: 30,
            sizeL: 25,
            sizeXL:40,
            price: 320000,
            newprice:299999,
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 3,
            status: 1, 
            title: 'HOODIE SPACE',
            img: './assets/image/HOODIE SPACE.jpg',
            imghv: './assets/image/HOODIE SPACE -Hover.jpg',
            category: 'Áo Hoodie',
            sizeS: 30,
            sizeM: 68,
            sizeL: 55,
            sizeXL:20,
            price: 320000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 4,
            status: 1, 
            title: 'Double Pocket',
            img: './assets/image/Double Pocket - shirt.png',
            imghv: './assets/image/Double Pocket - shirt- Hover.webp',
            category: 'Áo Sơ mi',
            sizeS: 39,
            sizeM: 50,
            sizeL: 80,
            sizeXL:40,
            price: 350000,
            newprice:320000,
            desc: 'Form boxy\nGraphic in kéo full bản ở mặt trước và mặt sau áo\nLogo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
       
        {
            id: 5,
            status: 1, 
            title: 'SPIRIT BLACK',
            img: './assets/image/spirit black- tee.png',
            imghv: './assets/image/spirit black- tee-hover.webp',
            category: 'Áo Thun',
            sizeS: 30,
            sizeM: 45,
            sizeL: 99,
            sizeXL:40,
            price: 280000,
            newprice:'',
            desc: 'Form boxy\nGraphic in kéo full bản ở mặt trước và mặt sau áo\nLogo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 6,
            status: 1, 
            title: 'ROYAL HORSE SHIRT',
            img: './assets/image/ROYAL HORSE SHIRT.jpg',
            imghv: './assets/image/ROYAL HORSE SHIRT-Hover.jpg',
            category: 'Áo Sơ mi',
            sizeS: 30,
            sizeM: 34,
            sizeL: 91,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 7,
            status: 1, 
            title: 'Cyrus Shirt',
            img: './assets/image/Cyrus Shirt.png',
            imghv: './assets/image/Cyrus Shirt-Hover.jpg',
            category: 'Áo Sơ mi',
            sizeS: 30,
            sizeM: 70,
            sizeL: 39,
            sizeXL:41,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },

       
        {
            id: 8,
            status: 1, 
            title: 'PARALLEL TEE',
            img: './assets/image/PARALLEL TEE.png',
            imghv: './assets/image/PARALLEL TEE-Hover.jpg',
            category: 'Áo Thun',
            sizeS: 26,
            sizeM: 31,
            sizeL: 30,
            sizeXL:40,
            price: 200000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },

        {
            id: 9,
            status: 1, 
            title: 'HEBREW BOXY HOODIE',
            img: './assets/image/HEBREW BOXY HOODIE.png',
            imghv: './assets/image/HEBREW BOXY HOODIE -Hover.webp',
            category: 'Áo Hoodie',
            sizeS: 30,
            sizeM: 39,
            sizeL: 31,
            sizeXL:40,
            price: 340000,
            newprice:310000,
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 10,
            status: 1, 
            title: 'ROCKETMAN POLO',
            category: "Áo Polo",
            img: './assets/image/ROCKETMAN POLO.webp',
            imghv: './assets/image/ROCKETMAN POLO-Hover.jpg',
            sizeS: 20,
            sizeM: 310,
            sizeL: 36,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 11,
            status: 1, 
            title: 'BAD ROMANCE TEE',
            img: './assets/image/bad-romance-tee.png',
            imghv: './assets/image/bad-romance-tee-hover.webp',
            category: 'Áo Thun',
            sizeS: 68,
            sizeM: 31,
            sizeL: 48,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 12,
            status: 1, 
            title: 'BUTTERFLY KISS TEE',
            img: './assets/image/BUTTERFLY KISS TEE.jpg',
            imghv: './assets/image/BUTTERFLY KISS TEE- hover.webp',
            category: 'Áo Thun',
            sizeS: 30,
            sizeM: 37,
            sizeL: 80,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 13,
            status: 1, 
            title: 'NEIL MOON TEE',
            img: './assets/image/NEIL MOON TEE.jpg',
            imghv: './assets/image/NEIL MOON TEE-Hover.webp',
            category: 'Áo Thun',
            sizeS: 22,
            sizeM: 38,
            sizeL: 30,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 14,
            status: 1, 
            title: 'TOURO GRIM TEE',
            img: './assets/image/TOURO GRIM TEE.jpg',
            imghv: './assets/image/TOURO GRIM TEE-Hover.webp',
            category: 'Áo Thun',
            sizeS: 30,
            sizeM: 31,
            sizeL: 38,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 15,
            status: 1, 
            title: 'SONIE LINE TEE',
            img: './assets/image/SONIE LINE TEE.jpg',
            imghv: './assets/image/SONIE LINE TEE-Hover.webp',
            category: 'Áo Thun',
            sizeS: 30,
            sizeM: 44,
            sizeL: 39,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 16,
            status: 1, 
            title: 'COMMONLY TEE',
            img: './assets/image/commonly -tee.jpg',
            imghv: './assets/image/commonly -tee-hover.jpeg',
            category: 'Áo Thun',
            sizeS: 31,
            sizeM: 36,
            sizeL: 30,
            sizeXL:40,
            price: 250000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 17,
            status: 1, 
            title: 'MAJOR PIECES JACKET',
            img: './assets/image/MAJOR PIECES JACKET.png',
            imghv: './assets/image/MAJOR PIECES JACKET-Hover.webp',
            category: 'Áo Khoác',
            sizeS: 30,
            sizeM: 25,
            sizeL: 30,
            sizeXL:40,
            price: 450000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 18,
            status: 1, 
            title: 'MADNESS',
            img: './assets/image/madness - tee.jpg',
            imghv: './assets/image/madness - tee- hover.webp',
            category: 'Áo Thun',
            sizeS: 30,
            sizeM: 31,
            sizeL: 38,
            sizeXL:40,
            price: 350000,
            newprice:330000,
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 19,
            status: 1, 
            title: 'CHILLING INSIDE',
            imghv: './assets/image/chilling_inside_tee-hover.webp',
            img: './assets/image/chilling inside - tee.jpg',
            category: 'Áo Thun',
            sizeS: 68,
            sizeM: 30,
            sizeL: 32,
            sizeXL:40,
            price: 350000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 20,
            status: 1, 
            title: 'VIETNAMESE TEE',
            imghv: './assets/image/vietnamese - tee.jpg',
            img: './assets/image/vietnamese - tee- hover.jpg',
            category: 'Áo Thun',
            sizeS: 30,
            sizeM: 38,
            sizeL: 30,
            sizeXL:40,
            price: 350000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
            id: 21,
            status: 1, 
            title: 'UNIFY POLO',
            img: './assets/image/UNIFY POLO.png',
            imghv: './assets/image/UNIFY POLO-hover.webp',
            category: 'Áo Polo',
            sizeS: 29,
            sizeM: 39,
            sizeL: 20,
            sizeXL: 50,
            price: 360000,
            newprice:'',
            desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
        },
        {
        id: 22,
        status: 1, 
        title: 'COUNTERPART',
        img: './assets/image/counterpart - polo.png',
        imghv: './assets/image/counterpart - polo -Hover.webp',
        category: 'Áo Polo',
        sizeS: 45,
        sizeM: 30,
        sizeL: 35,
        sizeXL:40,
        price: 360000,
        newprice:'',
        desc: 'Form basic mới\n Áo bo cổ \nThiết kế 2 line dọc theo vai áo\n Hoạ tiết chữ mặt trước sử dụng kỹ thuật thêu nổi\n Nameplate inox đính ở mặt sau áo\n Chất liệu: Cotton 2 chiều'
    },
    {
        id: 23,
        status: 1, 
        title: 'ALLYSON ATHLETE JERSEY',
        img: './assets/image/ALLYSON ATHLETE JERSEY polo.png',
        imghv: './assets/image/ALLYSON ATHLETE JERSEY polo-hover.webp',
        category: 'Áo Polo',
        sizeS: 35,
        sizeM: 30,
        sizeL: 25,
        sizeXL:40,
        price: 420000,
        newprice:399000,
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 24,
        status: 1, 
        title: 'HURDLES ON',
        img: './assets/image/HURDLES ON TEE.png',
        imghv: './assets/image/HURDLES ON TEE-Hover.jpg',
        category: 'Áo Thun',
        sizeS: 30,
        sizeM: 39,
        sizeL: 31,
        sizeXL:20,
        price: 380000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 25,
        status: 1,
         title: 'GOOD VIBE POLO',
        img: './assets/image/good vibe - polo.png',
        imghv: './assets/image/good vibe - hover.webp',    
        category: 'Áo Polo',
        sizeS: 30,
        sizeM: 30,
        sizeL: 60,
        sizeXL:40,
        price: 699000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 26,
        status: 1, 
        title: 'ESSENTIALS POLO',
        img: './assets/image/essentials polo.png',
        imghv: './assets/image/essentials polo- hover.webp',
        category: 'Áo Polo',
        sizeS: 30,
        sizeM: 78,
        sizeL: 32,
        sizeXL:40,
        price: 480000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },

    {
        id: 27,
        status: 1, 
        title: 'DECEITFUL TEE',
        img: './assets/image/DECEITFUL TEE.png',
        imghv: './assets/image/DECEITFUL TEE- Hover.webp',
        category: 'Áo Thun',
        sizeS: 39,
        sizeM: 20,
        sizeL: 37,
        sizeXL:40,
        price: 340000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },

    {
        id: 28,
        status: 1, 
        title: 'SPIKES SPORT JERSEY',
        img: './assets/image/SPIKES SPORT JERSEY POLO.png',
        imghv: './assets/image/SPIKES SPORT JERSEY POLO-Hover.webp',
        category: 'Áo Polo',
        sizeS: 30,
        sizeM: 31,
        sizeL: 30,
        sizeXL:40,
        price: 340000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },

    {
        id: 29,
        status: 1, 
        title: 'LILIES POLO',
        img: './assets/image/LILIES POLO.jpg',
        imghv: './assets/image/LILIES POLO-Hover.jpg',
        category: 'Áo Polo',
        sizeS: 79,
        sizeM: 30,
        sizeL: 51,
        sizeXL:40,
        price: 240000,
        newprice:220000,
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },

    {
        id: 30,
        status: 1, 
        title: 'SPECIAL POLO',
        img: './assets/image/special - polo.jpg',
        imghv: './assets/image/special - polo-hover.webp',
        category: 'Áo Polo',
        sizeS: 60,
        sizeM: 29,
        sizeL: 30,
        sizeXL:40,
        price: 340000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 31,
        status: 1, 
        title: 'LIQUID POLO',
        category: "Áo Polo",
        img: './assets/image/LIQUID POLO.webp',
        imghv: './assets/image/LIQUID POLO-Hover.jpg',
        sizeS: 30,
        sizeM: 34,
        sizeL: 68,
        sizeXL:40,
        price: 250000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 32,
        status: 1, 
        title: 'NEGATIVITY HIDE',
        img: './assets/image/NEGATIVITY HIDE jacket.png',
        imghv: './assets/image/NEGATIVITY HIDE jacket- hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 39,
        sizeL: 30,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 33,
        status: 1, 
        title: 'FEEL ALIVE JACKET',
        img: './assets/image/FEEL ALIVE JACKET.webp',
        imghv: './assets/image/FEEL ALIVE JACKET-Hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 37,
        sizeL: 34,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 34,
        status: 1, 
        title: 'DOMINATOR LEATHER JACKET',
        img: './assets/image/DOMINATOR LEATHER JACKET.webp',
        imghv: './assets/image/DOMINATOR LEATHER JACKET- Hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 34,
        sizeL: 55,
        sizeXL:40,
        price: 650000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 35,
        status: 1, 
        title: 'MONOGRAM CARDIGAN',
        img: './assets/image/MONOGRAM CARDIGAN- jacket.jpg',
        imghv: './assets/image/MONOGRAM CARDIGAN- jacket- hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 48,
        sizeL: 69,
        sizeXL:40,
        price: 500000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 36,
        status: 1, 
        title: 'WRAPPED POLO',
        img: './assets/image/WRAPPED POLO.png',
        imghv: './assets/image/WRAPPED POLO_hover.webp',
        category: 'Áo Polo',
        sizeS: 30,
        sizeM: 37,
        sizeL: 10,
        sizeXL:40,
        price: 540000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },


    {
        id: 37,
        status: 1, 
        title: 'Slim Jean Shirt',
        img: './assets/image/Slim Jean Shirt.png',
        imghv: './assets/image/Slim Jean Shirt-Hover.jpg',
        category: 'Áo Sơ mi',
        sizeS: 30,
        sizeM: 31,
        sizeL: 38,
        sizeXL:40,
        price: 250000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 38,
        status: 1, 
        title: 'Signature Shirt',
        img: './assets/image/Signature Shirt.png',
        imghv: './assets/image/Signature Shirt-hover.webp',
        category: 'Áo Sơ Mi',
        sizeS: 30,
        sizeM: 39,
        sizeL: 30,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 39,
        status: 1, 
        title: 'Mende Studio Shirt',
        img: './assets/image/Mende Studio Shirt.png',
        imghv: './assets/image/Mende Studio Shirt-Hover.jpeg',
        category: 'Áo Sơ mi',
        sizeS: 30,
        sizeM: 30,
        sizeL: 30,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 40,
        status: 1, title: 'PERENNIAL HEART TEE',
        img: './assets/image/PERENNIAL HEART TEE.png',
        imghv: './assets/image/PERENNIAL HEART TEE-Hover.webp',
        category: 'Áo Thun',
        sizeS: 30,
        sizeM: 37,
        sizeL: 60,
        sizeXL:40,
        price: 699000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },

    {
        id: 41,
        status: 1, 
        title: 'Silky Caro',
        img: './assets/image/Silky Caro - shirt.png',
        imghv: './assets/image/Silky Caro - shirt-hover.webp',
        category: 'Áo Sơ Mi',
        sizeS: 30,
        sizeM: 99,
        sizeL: 35,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 42,
        status: 1, 
        title: 'Silky Caro White',
        img: './assets/image/Silky Caro  white- shirt.png',
        imghv: './assets/image/Silky Caro  white- shirt-hover.png',
        category: 'Áo Sơ mi',
        sizeS: 30,
        sizeM: 39,
        sizeL: 68,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 43,
        status: 1, 
        title: 'Corduroy Shirt',
        img: './assets/image/Corduroy Shirt.png',
        imghv: './assets/image/Corduroy Shirt-Hover.webp',
        category: 'Áo Sơ mi',
        sizeS: 30,
        sizeM: 37,
        sizeL: 34,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 44,
        status: 1, 
        title: 'Original Shirt',
        img: './assets/image/Original Shirt.png',
        imghv: './assets/image/Original Shirt-Hover.jpg',
        category: 'Áo Sơ mi',
        sizeS: 30,
        sizeM: 34,
        sizeL: 52,
        sizeXL:40,
        price: 250000,
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 45,
        status: 1, 
        title: 'Ruku Shirt',
        img: './assets/image/Ruku Shirt.png',
        imghv: './assets/image/Ruku Shirt-Hover.webp',
        category: 'Áo Sơ mi',
        sizeS: 37,
        sizeM: 77,
        sizeL: 33,
        sizeXL:40,
        price: 500000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 46,
        status: 1, 
        title: 'SAIGON VINTAGE',
        img: './assets/image/saigon vintage - tee.png',
        imghv: './assets/image/saigon vintage - tee-hover.webp',
        category: 'Áo Thun',
        sizeS: 30,
        sizeM: 37,
        sizeL: 10,
        sizeXL:40,
        price: 540000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },

    {
        id: 47,
        status: 1, 
        title: 'ROYAL HORSE SHIRT',
        img: './assets/image/ROYAL HORSE SHIRT.jpg',
        imghv: './assets/image/ROYAL HORSE SHIRT-Hover.jpg',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 69,
        sizeL: 22,
        sizeXL:40,
        price: 250000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 48,
        status: 1, 
        title: 'ALPHABETIC JEAN JACKET',
        img: './assets/image/ALPHABETIC JEAN JACKET.jpg',
        imghv: './assets/image/ALPHABETIC JEAN JACKET-hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 39,
        sizeL: 51,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 49,
        status: 1, 
        title: 'HALMORT JACKET',
        img: './assets/image/HALMORT JACKET.webp',
        imghv: './assets/image/HALMORT JACKET-Hover.webp',
        category: 'Áo Khoác',
        sizeS: 70,
        sizeM: 35,
        sizeL: 30,
        sizeXL:40,
        price: 250000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 50,
        status: 1, 
        title: 'smoke jaket',
        img: './assets/image/smoke jacket.jpg',
        imghv: './assets/image/smoke jacket-Hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 99,
        sizeL: 51,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 51,
        status: 1, 
        title: 'LITHE BOXY HOODIE',
        img: './assets/image/LITHE BOXY HOODIE.png',
        imghv: './assets/image/LITHE BOXY HOODIE-Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 30,
        sizeM: 40,
        sizeL: 37,
        sizeXL:40,
        price: 250000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 52,
        status: 1, 
        title: 'TUMBLEDOWN BOXY HOODIE',
        img: './assets/image/TUMBLEDOWN BOXY HOODIE.png',
        imghv: './assets/image/TUMBLEDOWN BOXY HOODIE-Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 30,
        sizeM: 99,
        sizeL: 51,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 53,
        status: 1, 
        title: 'LONER CLUB BOXY HOODIE',
        img: './assets/image/LONER CLUB BOXY HOODIE.png',
        imghv: './assets/image/LONER CLUB BOXY HOODIE-Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 30,
        sizeM: 91,
        sizeL: 50,
        sizeXL:40,
        price: 350000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 54,
        status: 1, 
        title: 'QUADRATE BOXY HOODIE',
        img: './assets/image/QUADRATE BOXY HOODIE.png',
        imghv: './assets/image/QUADRATE BOXY HOODIE-Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 30,
        sizeM: 39,
        sizeL: 33,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 55,
        status: 1, 
        title: 'METAL TRUNKS BOXY HOODIE',
        img: './assets/image/METAL TRUNKS BOXY HOODIE.png',
        imghv: './assets/image/METAL TRUNKS BOXY HOODIE-Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 30,
        sizeM: 37,
        sizeL: 34,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 56,
        status: 1, 
        title: 'WAY ON CLOUD HOODIE',
        img: './assets/image/WAY ON CLOUD HOODIE.png',
        imghv: './assets/image/WAY ON CLOUD HOODIE-Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 30,
        sizeM: 34,
        sizeL: 55,
        sizeXL:40,
        price: 250000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 57,
        status: 1, 
        title: 'CHRONICLE HOODIE',
        img: './assets/image/CHRONICLE HOODIE.png',
        imghv: './assets/image/CHRONICLE HOODIE- Hover.webp',
        category: 'Áo Hoodie',
        sizeS: 39,
        sizeM: 33,
        sizeL: 60,
        sizeXL:40,
        price: 500000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 58,
        status: 1, 
        title: 'LABEL EMBROIDERED JACKET',
        img: './assets/image/LABEL EMBROIDERED JACKET.webp',
        imghv: './assets/image/LABEL EMBROIDERED JACKET- Hover.jpg',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 37,
        sizeL: 34,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 59,
        status: 1, 
        title: 'ENFOLD JACKET',
        img: './assets/image/ENFOLD JACKET.webp',
        imghv: './assets/image/ENFOLD JACKET-Hover.webp',
        category: 'Áo Khoác',
        sizeS: 30,
        sizeM: 34,
        sizeL: 54,
        sizeXL:40,
        price: 450000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 60,
        status: 1, 
        title: 'Legacy Line Jacket',
        img: './assets/image/Legacy Line Jacket.webp',
        imghv: './assets/image/Legacy Line Jacket- Hover.webp',
        category: 'Áo Khoác',
        sizeS: 37,
        sizeM: 38,
        sizeL: 30,
        sizeXL:40,
        price: 500000,
        newprice:399999,
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
    {
        id: 61,
        status: 1, 
        title: 'Legacy Line United',
        img: './assets/image/Legacy Line United.webp',
        imghv: './assets/image/Legacy Line United- Hover.webp',
        category: 'Áo Khoác',
        sizeS: 37,
        sizeM: 38,
        sizeL: 30,
        sizeXL:40,
        price: 500000,
        newprice:'',
        desc: 'Form boxy\n Graphic in kéo full bản ở mặt trước và mặt sau áo\n Logo Hades thêu nổi ở tay áo\nChất liệu: Cotton 2 chiều'
    },
        
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push(
        {
            id:1,
            fullname: "Nguyễn Văn Long",
            phone: "0986407915",
            password: "123456",
            address: 'Đoàn văn bơ p16, Q4',
            email: 'ngvlong202@gmail.com',
            status: 1,
            join: '2023-9-1',
            cart: [],
            userType: 1
        },
        {
            id:2,
            fullname: "Nguyễn Văn Long",
            phone: "0986407914",
            password: "123456",
            address: 'Đoàn văn bơ p16, Q4',
            email: 'ngvlong2003@gmail.com',
            status: 0,
            join: '2023-7-28',
            cart: [],
            userType: 0
        },
        {
            id:3,
            fullname: "Trần Khánh Linh",
            phone: "0357238978",
            password: "123456",
            address: 'Đoàn Văn Bơ p16, Q4',
            email: 'ngkhlinh@gmail.com',
            status: 0,
            join: '2023-8-16',
            cart: [],
            userType: 0
        },
        {
            id:4,
            fullname: "Nguyễn Khả Ngân",
            phone: "0986409233",
            password: "123456",
            address: '86 P. Nguyễn Văn Tuyết, Trung Liệt, Đống Đa, Hà Nội ',
            email: 'ngkhlinh@gmail.com',
            status: 1,
            join: '2023-8-19',
            cart: [],
            userType: 0
        },
        {
            id:5,
            fullname: "Hoàng Linh Đan",
            phone: "0934835328",
            password: "123456",
            address: '119 Trần Phú, Hải Châu 1, Hải Châu, Đà Nẵng',
            email: 'ngmkhoi@gmail.com',
            status: 1,
            join: '2023-9-2',
            cart: [],
            userType: 0
        },
        {
            id:4,
            fullname: "Lê Minh Khôi",
            phone: "0934583532",
            password: "123456",
            address: '49 Bát Đàn, Quận Hoàn Kiếm, Hà Nội',
            email: 'ngmkhoi@gmail.com',
            status: 1,
            join: '2023-10-16',
            cart: [],
            userType: 0
        }
        )
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}
function createOrder() {
    let orders = localStorage.getItem("order");
    if (!orders) {
        orders = [];
        orders.push(
        {
            id: 'MĐ01',
            khachhang: 'Nguyễn Khả Ngân',
            hinhthucgiao: 'Giao hàng hàng Nhanh',
            thoigiangiao: '',
            ghichu: "Giao hàng nhanh",
            tenguoinhan: 'Ngân',
            sdtnhan: '0986409233',
            diachinhan: '86 P. Nguyễn Văn Tuyết, Trung Liệt, Đống Đa, Hà Nội ',
            thoigiandat: "11/9/2023",
            tongtien:1898000,
            trangthai: 0
        },
        {
            id: 'MĐ02',
            khachhang: 'Lê Minh Khôi',
            hinhthucgiao: 'Giao hàng tiết kiệm',
            thoigiangiao: '',
            ghichu: "Đóng gói cẩn thận",
            tenguoinhan: 'Khôi',
            sdtnhan: '0934583532',
            diachinhan: '49 Bát Đàn, Quận Hoàn Kiếm, Hà Nội',
            thoigiandat: "11/12/2023",
            tongtien:680000,
            trangthai: 0
        },
        {
            id: 'MĐ03',
            khachhang: 'Hoàng Linh Đan',
            hinhthucgiao: 'Giao hàng tiết kiệm',
            thoigiangiao: '',
            ghichu: "",
            tenguoinhan: 'Linh Đan',
            sdtnhan: '0934835328',
            diachinhan: '119 Trần Phú, Hải Châu 1, Hải Châu, Đà Nẵng',
            thoigiandat: "11/14/2023",
            tongtien:640000,
            trangthai: 1
        }
        )
        localStorage.setItem('order', JSON.stringify(orders));
    }
}
function createDetailOrder() {
    let detailOrders = localStorage.getItem("orderDetails");
    if (!detailOrders) {
        detailOrders = [];
        detailOrders.push(
        {
            id : 61,
            madon :'MĐ01',
            price : 500000,
            size: 'M',
            quantity :1,
            category:"Áo Khoác",
            title : 'Legacy Line United' ,
            img :'./assets/image/Legacy Line United.webp',

        },
        {
            id : 25,
            madon :'MĐ01',
            price : 699000,
            size:'L',
            quantity :2,
            category:"Áo Polo",
            title : 'Good Vibe' ,
            img :'./assets/image/good vibe - polo.png',

        },
        {
            id : 14,
            madon :'MĐ02',
            price : 250000,
            size:'L',
            quantity :1,
            category:"Áo Polo",
            title : 'TOURO GRIM TEE' ,
            img :'./assets/image/TOURO GRIM TEE.jpg',

        },
        {
            id : 3,
            madon :'MĐ03',
            price : 320000,
            size:'L',
            quantity :2,
            category:"Áo Hoodie",
            title : 'HOODIE SPACE' ,
            img :'./assets/image/HOODIE SPACE.jpg',

        }
        

        )
        localStorage.setItem('orderDetails', JSON.stringify(detailOrders));
    }
}



window.onload = createProduct();
window.onload = createAdminAccount();
window.onload = createOrder();
window.onload = createDetailOrder();