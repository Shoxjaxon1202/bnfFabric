import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // React uchun i18next o'rnatish
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            collection: "Collection",
            aboutUs: "About Us",
            contacts: "Contacts",
            language: "Language",
          },
          footer: {
            description:
              "'Bukhara Natural Product' has been a company for many years producing cotton fabrics for use all over the world.",
            menu: "Menu", // Menyu uchun qo'shilgan tarjima
            contacts: "Contacts",
            subscribe: "Subscribe to our email",
            enterEmail: "Enter your email",
          },
          bottomFooter: {
            copyright:
              '© 2024 LLC "BUKHARA NATURAL PRODUCT". All rights reserved.',
          },
          intro: {
            // Yangi qism qo'shildi
            title: "Bukhara",
            subtitle: "Natural",
            product: "PRODUCT",
          },
          deliver: {
            freeShipping: "Free shipping",
            freeShippingText: "Free shipping on all orders",
            moneyBack: "Money back guarantee",
            moneyBackText: "30-day money back",
            onlineSupport: "Online support 24/7",
            onlineSupportText: "Technical support 24/7",
            securePayment: "Secure payment",
            securePaymentText: "All payment methods accepted",
          },
          quality: {
            materialQuality: "Material quality",
            productName: "Bukhara Natural Product",
            description:
              "'Bukhara Natural Product' has been a company that produces cotton fabrics for use all over the world for many years.",
            collectionButton: "COLLECTION",
          },
          winterCollection: {
            title: "Winter collection",
            subTitle: "Bukhara Natural Product",
          },
          autumnCollection: {
            title: "Autumn collection",
            subTitle: "Bukhara Natural Product",
          },
          summerCollection: {
            title: "Summer collection",
            subTitle: "Bukhara Natural Product",
          },
          news: {
            title: "News",
            subTitle: "Bukhara Natural Product",
            card1: {
              title: "How to choose perfect gadgets",
              text: "When, while the lovely valley teems with vapour around me...",
            },
            card2: {
              title: "How to choose perfect gadgets",
              text: "When, while the lovely valley teems with vapour around me...",
            },
            card3: {
              title: "How to choose perfect gadgets",
              text: "When, while the lovely valley teems with vapour around me...",
            },
          },
          collection: {
            search: "Search here",
            title: "Collection",
            spring: "Spring Collection",
            winter: "Winter Collection",
            summer: "Summer Collection",
            autumn: "Autumn Collection",
            showing: "Showing",
            of: "of",
            sorting: "Initial Sorting",
          },
          about: {
            title: "Bukhara Natural Product",
            text1:
              "Our factory has been a company that produces cotton fabrics for use all over the world for many years.",
            text2: "This company has been serving customers for 17 years.",
            text3:
              "The main goal of this company is to produce high quality and cost effective products.",
            text4:
              "The production process of this company is completely environmentally friendly.",
            text5:
              "The company can produce any kind of cotton raw materials according to the requirements and suggestions of customers.",
            text6:
              "The company is the official dealer of DongJia weaving machines in Uzbekistan.",
            text7:
              "Currently, more than 80 families contribute to the prestige and success of the company by providing financial support for their families.",
            text8:
              "To meet this demand, 50 weaving machines operate at high speed, non-stop.",
            text9:
              "We have the capacity to weave 200-250,000 meters of fabric per month.",
            text10:
              "In line with the high demand of our customers, the company has now established the production of high-quality premium eco-bags.",
            text11:
              "Bukhara Natural Product Company is pleased to serve its regular customers at any time.",
          },
          contact: {
            title: "Contact",
            email: "Email:",
            phone: "Tel:",
            address: "Address:",
            placeholderEmail: "Your E-mail",
            placeholderPhone: "Phone Number",
            placeholderMessage: "Your Message Here",
            submit: "Submit",
            messageSent: "Message sent!",
            messageNotSent: "Message not sent, please try again.",
          },

          gadget: {
            comment: "Leave a comment",
            emailPlaceholder: "Email (required)",
            websitePlaceholder: "Website",
            commentPlaceholder: "Comment",
            notPublished:
              "Your email address will not be published. Required fields are marked with *",
            messageSent: "Message sent!",
            error: "Invalid email, website, or message.",
            messageNotSent: "Message not sent, please try again.",
            button: "Send",
            articleText1:
              "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!",
            articleText2:
              "O my friend - but it is too much for my strength - I sink under the weight of the splendour of these visions! A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
            articleText3:
              "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.",
            articleText4:
              "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I describe these conceptions, could impress upon paper all that is living so full and warm within me.",
          },
          articleText: [
            "When, while the beautiful valley is full of mist around me, and the meridian sun lights up the upper surface of the impenetrable foliage of my trees, and only a few random rays penetrate into the inner sanctuary, I throw myself on the high grass by the murmuring stream; and when I lie close to the ground, I notice a thousand unknown plants: when I hear the buzzing of a small world among the stems and get used to the countless indescribable forms of insects and flies, then I feel the presence of the Almighty, who created us in His image, and the breath of this universal love that carries and sustains us as it hovers around us in the eternity of bliss; and then, my friend, when darkness covers my eyes, and heaven and earth seem to live in my soul and absorb its strength like the form of a beloved mistress, then I often think with longing: oh, how I wish I could describe these concepts, could I capture on paper all that lives so fully and warmly inside me.",
            "Oh, my friend - but this is too much for my strength - I am drowning under the weight of the magnificence of these visions! A wonderful peace has seized my whole soul, like these sweet morning springs that I enjoy with all my heart. I am alone, and feel the charm of existence in this place that was created for the bliss of souls like mine.",
            "I am so happy, my dear friend, so absorbed in the exquisite feeling of simple peaceful life, that I neglect my talents. I am unable to make a single stroke at the moment; and yet I feel that I have never been a better artist than now.",
          ],
        },
      },
      ru: {
        translation: {
          navbar: {
            home: "Главная",
            collection: "Коллекция",
            aboutUs: "О нас",
            contacts: "Контакты",
            language: "Язык",
          },
          footer: {
            description:
              "'Bukhara Natural Product' работает много лет, производя хлопковые ткани для использования по всему миру.",
            menu: "Меню", // Menyu uchun qo'shilgan tarjima
            contacts: "Контакты",
            subscribe: "Подписаться на нашу почту",
            enterEmail: "Введите ваш email",
          },
          bottomFooter: {
            copyright:
              '© 2024 ООО "BUKHARA NATURAL PRODUCT". Все права защищены.',
          },
          intro: {
            // Yangi qism qo'shildi
            title: "Бухара",
            subtitle: "Натуральный",
            product: "ПРОДУКТ",
          },
          deliver: {
            freeShipping: "Бесплатная доставка",
            freeShippingText: "Бесплатная доставка по всем заказам",
            moneyBack: "Гарантия возврата денег",
            moneyBackText: "Возврат денег в течение 30 дней",
            onlineSupport: "Онлайн поддержка 24/7",
            onlineSupportText: "Техническая поддержка 24/7",
            securePayment: "Безопасная оплата",
            securePaymentText: "Принимаются все способы оплаты",
          },
          quality: {
            materialQuality: "Качество материала",
            productName: "Бухара натуральный продукт",
            description:
              "'Bukhara Natural Product' является компанией, производящей хлопковые ткани для использования по всему миру на протяжении многих лет.",
            collectionButton: "КОЛЛЕКЦИЯ",
          },
          winterCollection: {
            title: "Зимняя коллекция",
            subTitle: "Бухара натуральный продукт",
          },
          autumnCollection: {
            title: "Осенняя коллекция",
            subTitle: "Бухара натуральный продукт",
          },
          summerCollection: {
            title: "Летняя коллекция",
            subTitle: "Бухара натуральный продукт",
          },
          news: {
            title: "Новости",
            subTitle: "Бухара натуральный продукт",
            card1: {
              title: "Как выбрать идеальные гаджеты",
              text: "Когда долина изобилует паром вокруг меня...",
            },
            card2: {
              title: "Как выбрать идеальные гаджеты",
              text: "Когда долина изобилует паром вокруг меня...",
            },
            card3: {
              title: "Как выбрать идеальные гаджеты",
              text: "Когда долина изобилует паром вокруг меня...",
            },
          },
          collection: {
            search: "Искать здесь",
            title: "Коллекция",
            spring: "Весенняя коллекция",
            winter: "Зимняя коллекция",
            summer: "Летняя коллекция",
            autumn: "Осенняя коллекция",
            showing: "Показаны",
            of: "из",
            sorting: "Начальная сортировка",
          },
          about: {
            title: "Bukhara Natural Product",
            text1:
              "Наш завод уже много лет производит хлопковые ткани для использования по всему миру.",
            text2: "Эта компания обслуживает клиентов уже 17 лет.",
            text3:
              "Основная цель этой компании - производить качественные и экономически эффективные продукты.",
            text4: "Процесс производства этой компании полностью экологичен.",
            text5:
              "Компания может производить любые виды хлопкового сырья по требованиям и предложениям клиентов.",
            text6:
              "Компания является официальным дилером ткацких станков DongJia в Узбекистане.",
            text7:
              "В настоящее время более 80 семей вносят свой вклад в престиж и успех компании, оказывая финансовую поддержку своим семьям.",
            text8:
              "Для удовлетворения этого спроса 50 ткацких станков работают на высокой скорости, без остановки.",
            text9:
              "У нас есть возможность ткать 200-250 000 метров ткани в месяц.",
            text10:
              "В соответствии с высоким спросом наших клиентов компания наладила производство высококачественных премиальных эко-сумок.",
            text11:
              "Компания Bukhara Natural Product рада обслуживать своих постоянных клиентов в любое время.",
          },
          contact: {
            title: "Контакт",
            email: "Эл. почта:",
            phone: "Тел:",
            address: "Адрес:",
            placeholderEmail: "Ваш email",
            placeholderPhone: "Номер телефона",
            placeholderMessage: "Ваше сообщение здесь",
            submit: "Отправить",
            messageSent: "Сообщение отправлено!",
            messageNotSent: "Сообщение не отправлено, попробуйте еще раз.",
          },
          gadget: {
            comment: "Оставить комментарий",
            emailPlaceholder: "Электронная почта (обязательно)",
            websitePlaceholder: "Веб-сайт",
            commentPlaceholder: "Комментарий",
            notPublished:
              "Ваш адрес электронной почты не будет опубликован. Обязательные поля отмечены *.",
            messageSent: "Сообщение отправлено!",
            error: "Неверная электронная почта, веб-сайт или сообщение.",
            messageNotSent:
              "Сообщение не отправлено, пожалуйста, попробуйте еще раз.",
            button: "Отправить",
            articleText1:
              "Когда прекрасная долина вокруг меня наполнялась паром, и солнце меридиана освещало верхнюю поверхность острых листьев моих деревьев, и лишь несколько случайных лучей проникают во внутреннюю святость, я бросаюсь в высокий травянистый поток; и когда я лежу близко к земле, я замечаю тысячи незнакомых растений: когда я слышу шум маленького мира между ручками и привыкаю к неописуемым формам, как насекомые и кошки, я ощущаю присутствие Бога, который создал нас по своему образу, и это общее дыхание любви, поднимающее нас и поддерживающее, летящее в вечности, чтобы сделать нас счастливыми; и затем, друг мой, когда мои темные глаза обвивают, и небо и земля как будто поселились в моей душе, поглощая свою силу, в форме моей любимой, я думаю, о, если бы я мог описать эти представления, записать их на бумаге, все, что заставляет меня чувствовать себя так полным и теплым, чтобы это стало проявлением моей души, потому что моя душа является бесконечным проявлением Бога.",
            articleText2:
              "О, друг мой - но это слишком много для моей силы - я испытываю давление роскоши этой мысли! Удивительный покой охватил всю мою душу, как сладкие дни весны, я наслаждаюсь ими всем сердцем. Я одинок, и я чувствую привлекательность процесса существования в этом месте, созданного для душ, подобных мне.",
            articleText3:
              "Я так счастлив, дорогой друг, так погруженный в ощущение тихого существования, что игнорирую свои способности. В данный момент мне трудно провести какую-либо линию; и все же я никогда не чувствую себя великим художником в текущий момент.",
            articleText4:
              "Когда прекрасная долина вокруг меня наполнялась паром, и солнце меридиана освещало верхнюю поверхность острых листьев моих деревьев, и лишь несколько случайных лучей проникают во внутреннюю святость, я бросаюсь в высокий травянистый поток; и когда я лежу близко к земле, я замечаю тысячи незнакомых растений: когда я слышу шум маленького мира между ручками и привыкаю к неописуемым формам, как насекомые и кошки, я ощущаю присутствие Бога.",
          },

          articleText: [
            "Когда, пока прекрасная долина полна пара вокруг меня, и меридианный солнце освещает верхнюю поверхность непроницаемой листвы моих деревьев, и лишь несколько случайных лучей проникают во внутреннее святилище, я бросаюсь на высокую траву у журчащего потока; и, когда я лежу близко к земле, я замечаю тысячу неизвестных растений: когда я слышу жужжание маленького мира среди стеблей и привыкаю к бесчисленным неописуемым формам насекомых и мух, тогда я ощущаю присутствие Всемогущего, который создал нас по своему образу, и дыхание этой универсальной любви, которая несет и поддерживает нас, как она парит вокруг нас в вечности блаженства; и тогда, мой друг, когда темнота покрывает мои глаза, и небеса и земля, кажется, живут в моей душе и поглощают ее силу, как форма любимой любовницы, тогда я часто думаю с тоской: о, как бы мне описать эти концепции, мог бы я запечатлеть на бумаге все, что живет так полно и тепло внутри меня.",
            "О, мой друг - но это слишком много для моей силы - я тоню под тяжестью великолепия этих видений! Чудесный покой овладел всей моей душой, как эти сладкие утренние весны, которые я наслаждаюсь всем сердцем. Я один, и чувствую очарование существования в этом месте, которое было создано для блаженства душ, подобных моей.",
            "Я так счастлив, мой дорогой друг, так поглощен изысканным ощущением простой спокойной жизни, что пренебрегаю своими талантами. Я не способен провести ни одного штриха в данный момент; и все же я чувствую, что никогда не был лучшим художником, чем сейчас.",
          ],
        },
      },
      uz: {
        translation: {
          navbar: {
            home: "Bosh sahifa",
            collection: "Kolleksiya",
            aboutUs: "Haqimizda",
            contacts: "Aloqalar",
            language: "Til",
          },
          footer: {
            description:
              "'Bukhara Natural Product' butun dunyo bo'ylab foydalanish uchun paxta matolarini ishlab chiqaruvchi kompaniya bo'lib kelmoqda.",
            menu: "Menyu", // Menyu uchun qo'shilgan tarjima
            contacts: "Aloqalar",
            subscribe: "Bizning email uchun obuna bo'ling",
            enterEmail: "Emailingizni kiriting",
          },
          bottomFooter: {
            copyright:
              '© 2024 MCHJ "BUKHARA NATURAL PRODUCT". Barcha huquqlar himoyalangan.',
          },
          intro: {
            // Yangi qism qo'shildi
            title: "Buxoro",
            subtitle: "Tabiy",
            product: "Mahsulot",
          },
          deliver: {
            freeShipping: "Bepul yetkazib berish",
            freeShippingText: "Barcha buyurtmalar uchun bepul yetkazib berish",
            moneyBack: "Pulni qaytarish kafolati",
            moneyBackText: "30 kun ichida pulni qaytarish",
            onlineSupport: "Onlayn qo'llab-quvvatlash 24/7",
            onlineSupportText: "Texnik qo'llab-quvvatlash 24/7",
            securePayment: "Xavfsiz to'lov",
            securePaymentText: "Barcha to'lov usullari qabul qilinadi",
          },
          quality: {
            materialQuality: "Material sifati",
            productName: "Buxoro tabiiy mahsuloti",
            description:
              "'Bukhara Natural Product' butun dunyo bo'ylab foydalanish uchun paxta matolarini ishlab chiqaruvchi kompaniya bo'lib kelmoqda.",
            collectionButton: "KOLLEKSIYA",
          },
          winterCollection: {
            title: "Qish kolleksiyasi",
            subTitle: "Buxoro tabiiy mahsuloti",
          },
          autumnCollection: {
            title: "Kuz kolleksiyasi",
            subTitle: "Buxoro tabiiy mahsuloti",
          },
          summerCollection: {
            title: "Yoz kolleksiyasi",
            subTitle: "Buxoro tabiiy mahsuloti",
          },
          news: {
            title: "Yangiliklar",
            subTitle: "Buxoro tabiiy mahsuloti",
            card1: {
              title: "Muvaffaqiyatli gadjetlarni qanday tanlash kerak",
              text: "Qanday qilib mukammal gadjetlarni tanlash kerak...",
            },
            card2: {
              title: "Muvaffaqiyatli gadjetlarni qanday tanlash kerak",
              text: "Qanday qilib mukammal gadjetlarni tanlash kerak...",
            },
            card3: {
              title: "Muvaffaqiyatli gadjetlarni qanday tanlash kerak",
              text: "Qanday qilib mukammal gadjetlarni tanlash kerak...",
            },
          },
          collection: {
            search: "Bu yerdan qidirish",
            title: "To'plam",
            spring: "Bahorgi To'plam",
            winter: "Qishgi To'plam",
            summer: "Yozgi To'plam",
            autumn: "Kuzgi To'plam",
            showing: "Ko'rsatilmoqda",
            of: "dan",
            sorting: "Dastlabki Saralash",
          },
          about: {
            title: "Buxoro Natural Product",
            text1:
              "Bizning fabrikamiz ko‘p yillar davomida butun dunyo bo‘ylab foydalanish uchun paxta matolarini ishlab chiqaruvchi kompaniya bo‘lib kelgan.",
            text2:
              "Bu kompaniya 17 yildan beri mijozlarga xizmat ko‘rsatib kelmoqda.",
            text3:
              "Bu kompaniyaning asosiy maqsadi sifatli va tejamkor mahsulotlar ishlab chiqarishdir.",
            text4:
              "Kompaniyaning ishlab chiqarish jarayoni to‘liq ekologik jihatdan xavfsizdir.",
            text5:
              "Kompaniya mijozlarning talablari va takliflariga muvofiq har qanday turdagi paxta xomashyosini ishlab chiqarishi mumkin.",
            text6:
              "Kompaniya O‘zbekistonda DongJia to‘qimachilik mashinalarining rasmiy dileri hisoblanadi.",
            text7:
              "Hozirgi vaqtda 80 dan ortiq oila kompaniyaning obro‘sini oshirish va muvaffaqiyatiga hissa qo‘shish orqali o‘z oilalariga moliyaviy yordam ko‘rsatadi.",
            text8:
              "Ushbu talabni qondirish uchun 50 ta to‘qimachilik mashinalari yuqori tezlikda, to‘xtovsiz ishlaydi.",
            text9:
              "Biz oyiga 200-250 ming metr mato to‘qish imkoniyatiga egamiz.",
            text10:
              "Mijozlarimizning yuqori talablariga muvofiq, kompaniya endi yuqori sifatli premium ekologik sumkalar ishlab chiqarishni yo‘lga qo‘ygan.",
            text11:
              "Buxoro Natural Product kompaniyasi o‘zining doimiy mijozlariga har qanday vaqtda xizmat ko‘rsatishga tayyor.",
          },
          contact: {
            title: "Aloqa",
            email: "Email:",
            phone: "Tel:",
            address: "Manzil:",
            placeholderEmail: "Sizning E-mail",
            placeholderPhone: "Telefon raqami",
            placeholderMessage: "Xabaringizni shu yerda yozing",
            submit: "Yuborish",
            messageSent: "Xabar yuborildi!",
            messageNotSent: "Xabar yuborilmadi, qayta urinib ko'ring.",
          },
          gadget: {
            comment: "Izoh qoldirish",
            emailPlaceholder: "Elektron pochta (majburi)",
            websitePlaceholder: "Veb-sayt",
            commentPlaceholder: "Izoh",
            notPublished:
              "Sizning elektron pochta manzilingiz e'lon qilinmaydi. Majburiy maydonlar * bilan belgilanadi.",
            messageSent: "Xabar jo'natildi!",
            error: "Noto'g'ri elektron pochta, veb-sayt yoki xabar.",
            messageNotSent:
              "Xabar jo'natilmedi, iltimos, qaytadan harakat qiling.",
            button: "Jo'natish",
            articleText1:
              "Qachonki, go'zal vodiya atrofimda bug' bilan to'lgan va meridian quyoshi daraxtlarimning o'tkir barglarining yuqori yuzasini yoritayotganida, va faqat bir necha tasodifiy nurlar ichki muqaddaslikka kirsa, men shovqinli oqimga yaqin baland o'tga tashlanaman; va men erga yaqin yotganimda, minglab noma'lum o'simliklarni payqayman: men qalamlar orasidagi kichik dunyoning shovqinini eshitganimda va hasharotlar va mushuklar kabi tasvirga olinmaydigan shakllarga odatlanib qolganimda, Allohning mavjudligini his etaman, u bizni o'z suratimizda yaratgan, va bu umumiy sevgi nafasini, bizni ko'tarib va qo'llab-quvvatlayotgan, bizni baxt etishning abadiyatida parvoz qilayotgan; va keyin, do'stim, qorong'u ko'zlarimni o'ralganda, va osmon va yer mening ruhimda joylashgandek, o'z kuchini yutgandek, ya'ni mening sevimli ma'shuqamning shaklida, o'ylayman, oh, bu tasavvurlarni tasvirlay olsa edim, qog'ozga yozib qo'ysa edim, meni shu qadar to'liq va iliq his qilyotgan barcha narsalarni, u mening ruhimning ko'rinishi bo'lishi uchun, chunki mening ruhim cheksiz Xudoning ko'rinishi.",
            articleText2:
              "Ey, do'stim - lekin bu kuchimdan juda ko'p - men bu xayolning hashamatiga bosim o'tkazaman! Ajoyib tinchlik butun ruhimni egallab oldi, bahorning shirin kunlari kabi, ularni to'liq yurak bilan maza qilaman. Men yolg'izman, va ushbu joyda mavjud bo'lish jarayonining jozibasini his qilaman, bu menga o'xshagan ruhlar uchun yaratilgan.",
            articleText3:
              "Men juda baxtli, aziz do'stim, shunchaki tinch mavjudlik hissi bilan shunchalik cho'milib, iqtidorimni e'tiborsiz qoldiraman. Hozirgi paytda biron chiziq chizishim qiyin; va shunga qaramay, men hech qachon hozirgi paytda buyuk san'atkor bo'lmaganligimni his qilaman.",
            articleText4:
              "Qachonki, go'zal vodiya atrofimda bug' bilan to'lgan va meridian quyoshi daraxtlarimning o'tkir barglarining yuqori yuzasini yoritayotganida, va faqat bir necha tasodifiy nurlar ichki muqaddaslikka kirsa, men shovqinli oqimga yaqin baland o'tga tashlanaman; va men erga yaqin yotganimda, minglab noma'lum o'simliklarni payqayman: men qalamlar orasidagi kichik dunyoning shovqinini eshitganimda va hasharotlar va mushuklar kabi tasvirga olinmaydigan shakllarga odatlanib qolganimda, Allohning mavjudligini his etaman.",
          },
          articleText: [
            "Qachonki, go'zal vodiya atrofimda bug' bilan to'lgan va meridian quyoshi daraxtlarimning o'tkir barglarining yuqori yuzasini yoritayotganida, va faqat bir necha tasodifiy nurlar ichki muqaddaslikka kirsa, men shovqinli oqimga yaqin baland o'tga tashlanaman; va men erga yaqin yotganimda, minglab noma'lum o'simliklarni payqayman: men qalamlar orasidagi kichik dunyoning shovqinini eshitganimda va hasharotlar va mushuklar kabi tasvirga olinmaydigan shakllarga odatlanib qolganimda, Allohning mavjudligini his etaman, u bizni o'z suratimizda yaratgan, va bu umumiy sevgi nafasini, bizni ko'tarib va qo'llab-quvvatlayotgan, bizni baxt etishning abadiyatida parvoz qilayotgan; va keyin, do'stim, qorong'u ko'zlarimni o'ralganida, osmon va yer mening ruhimda yashayotganidek va uning kuchini o'zlashtirayotganida, sevimli sevgilining shakli kabi, men ko'pincha xohish bilan o'ylayman: oh, qanday qilib bu tushunchalarni tasvirlay olishim, men ichimda to'la va iliq yashayotgan narsalarni qog'ozga muhrlab qo'ya olishim.",
            "Oh, do'stim - lekin bu mening kuchim uchun juda ko'p - men bu tasvirlar go'zalligining og'irligi ostida cho'kmoqdaman! Ajoyib tinchlik butun ruhimni egalladi, xuddi men barcha qalbim bilan bahramand bo'lgan bu shirin ertalab bahorlar kabi. Men yolg'izman va o'zim kabi ruhlarning baxti uchun yaratilgan bu joyda mavjudlik jozibasini his qilaman.",
            "Men juda baxtliman, aziz do'stim, oddiy tinch hayotning nozik his-tuyg'usi bilan shunchalik to'lib qolganimdan, talantlarimni e'tiborsiz qoldiraman. Hozirda biror bir chiziq chizishim mumkin emas; lekin men hozir hech qachon o'zimdan yaxshi rassom bo'lmaganligimni his qilaman.",
          ],
        },
      },
    },
    lng: "en", // Dastlabki tilni o'rnatish
    fallbackLng: "en", // Agar tarjima topilmasa, qaysi tilga qaytish kerakligi
    interpolation: {
      escapeValue: false, // Xavfsizlik uchun 'xss'ni to'xtatish
    },
  });

export default i18n;
