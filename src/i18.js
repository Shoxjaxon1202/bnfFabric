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
