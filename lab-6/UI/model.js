const ObjInf = [
  {
    id: '1',
    description: 'Посылка с книгами для Петровой',
    createdAt: new Date('2026-08-03T09:10:00'),
    author: 'Ясинский Кирилл',
    photoLink: 'https://picsum.photos/seed/parcel1/200/150',
    trackNumber: 'RB100000001BY',
    type: 'Посылка',
    status: 'Доставлено',
    weight: 2.4,
    dimensions: '40 × 30 × 20',
    declaredValue: 150,
    cost: 12.5,
    senderName: 'Иванов Иван Иванович',
    senderPhone: '+375 29 123-45-67',
    senderAddress: 'г. Минск, ул. Ленина, 10, кв. 5',
    senderIndex: '220000',
    senderEmail: 'ivanov@example.by',
    recipientName: 'Петрова Анна Сергеевна',
    recipientPhone: '+375 29 765-43-21',
    recipientAddress: 'г. Гомель, ул. Советская, 25, кв. 8',
    recipientIndex: '246000',
    recipientEmail: 'petrova@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '2',
    description: 'Экспресс-доставка документов в Брест',
    createdAt: new Date('2026-08-07T12:40:00'),
    author: 'Соколовский Ян',
    photoLink: 'https://picsum.photos/seed/parcel2/200/150',
    trackNumber: 'RB100000002BY',
    type: 'Экспресс-отправление',
    status: 'В пути',
    weight: 0.4,
    dimensions: '30 × 20 × 5',
    declaredValue: 50,
    cost: 18,
    senderName: 'Сидоров Павел Петрович',
    senderPhone: '+375 33 222-11-00',
    senderAddress: 'г. Минск, пр-т Независимости, 12',
    senderIndex: '220030',
    senderEmail: 'sidorov@example.by',
    recipientName: 'Кузнецова Мария Викторовна',
    recipientPhone: '+375 29 555-33-22',
    recipientAddress: 'г. Брест, ул. Гоголя, 7, кв. 3',
    recipientIndex: '224000',
    recipientEmail: 'kuznetsova@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '3',
    description: 'Бандероль с документами для отдела кадров',
    createdAt: new Date('2026-08-12T15:25:00'),
    author: 'Смирнова Ольга',
    trackNumber: 'RB100000003BY',
    type: 'Бандероль',
    status: 'Готов к выдаче',
    weight: 0.7,
    dimensions: '35 × 25 × 10',
    declaredValue: 20,
    cost: 7.2,
    senderName: 'ООО «Ромашка»',
    senderPhone: '+375 17 200-10-10',
    senderAddress: 'г. Минск, ул. Кальварийская, 24',
    senderIndex: '220004',
    senderEmail: 'office@romashka.by',
    recipientName: 'Орлова Елена Дмитриевна',
    recipientPhone: '+375 44 777-88-99',
    recipientAddress: 'г. Витебск, ул. Ленина, 18, кв. 42',
    recipientIndex: '210000',
    recipientEmail: 'orlova@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '4',
    description: 'Письмо с уведомлением о вручении',
    createdAt: new Date('2026-08-18T11:05:00'),
    author: 'Ясинский Кирилл',
    trackNumber: 'RB100000004BY',
    type: 'Письмо',
    status: 'Заявка создана',
    weight: 0.1,
    dimensions: '22 × 11 × 1',
    declaredValue: 5,
    cost: 3.1,
    senderName: 'Смирнов Алексей Николаевич',
    senderPhone: '+375 25 111-22-33',
    senderAddress: 'г. Могилёв, ул. Первомайская, 5',
    senderIndex: '212000',
    senderEmail: 'smirnov@example.by',
    recipientName: 'Волкова Ирина Олеговна',
    recipientPhone: '+375 29 444-55-66',
    recipientAddress: 'г. Гродно, ул. Советская, 9, кв. 11',
    recipientIndex: '230000',
    recipientEmail: 'volkova@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '5',
    description: 'Возврат посылки отправителю после хранения',
    createdAt: new Date('2026-08-21T16:30:00'),
    author: 'Соколовский Ян',
    trackNumber: 'RB100000005BY',
    type: 'Посылка',
    status: 'Возврат отправителю',
    weight: 3.2,
    dimensions: '45 × 35 × 25',
    declaredValue: 200,
    cost: 15.4,
    senderName: 'Морозов Дмитрий Сергеевич',
    senderPhone: '+375 29 321-45-67',
    senderAddress: 'г. Минск, ул. Притыцкого, 44, кв. 15',
    senderIndex: '220017',
    senderEmail: 'morozov@example.by',
    recipientName: 'Фёдоров Кирилл Андреевич',
    recipientPhone: '+375 33 987-65-43',
    recipientAddress: 'г. Барановичи, ул. Комсомольская, 3, кв. 7',
    recipientIndex: '225320',
    recipientEmail: 'fedorov@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Картой через кассу курьера'
  },
  {
    id: '6',
    description: 'Посылка с одеждой для магазина',
    createdAt: new Date('2026-08-26T10:00:00'),
    author: 'Смирнова Ольга',
    photoLink: 'https://picsum.photos/seed/parcel6/200/150',
    trackNumber: 'RB100000006BY',
    type: 'Посылка',
    status: 'Доставлено',
    weight: 5.8,
    dimensions: '50 × 40 × 30',
    declaredValue: 300,
    cost: 24.9,
    senderName: 'ИП Ковалёва',
    senderPhone: '+375 29 600-70-80',
    senderAddress: 'г. Минск, ул. Немига, 8',
    senderIndex: '220004',
    senderEmail: 'kovaleva@example.by',
    recipientName: 'ООО «Стиль»',
    recipientPhone: '+375 17 300-20-10',
    recipientAddress: 'г. Гомель, пр-т Ленина, 45',
    recipientIndex: '246000',
    recipientEmail: 'shop@stil.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '7',
    description: 'Бандероль с образцами продукции',
    createdAt: new Date('2026-09-01T13:20:00'),
    author: 'Ясинский Кирилл',
    trackNumber: 'RB100000007BY',
    type: 'Бандероль',
    status: 'В пути',
    weight: 1.1,
    dimensions: '38 × 28 × 12',
    declaredValue: 80,
    cost: 8.6,
    senderName: 'ООО «БелТорг»',
    senderPhone: '+375 17 250-30-40',
    senderAddress: 'г. Минск, ул. Тимирязева, 65',
    senderIndex: '220089',
    senderEmail: 'info@beltorg.by',
    recipientName: 'Григорьев Антон Игоревич',
    recipientPhone: '+375 44 123-00-99',
    recipientAddress: 'г. Пинск, ул. Днепровской флотилии, 14',
    recipientIndex: '225710',
    recipientEmail: 'grigoriev@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '8',
    description: 'Экспресс-отправление с подарком',
    createdAt: new Date('2026-09-05T09:45:00'),
    author: 'Соколовский Ян',
    photoLink: 'https://picsum.photos/seed/parcel8/200/150',
    trackNumber: 'RB100000008BY',
    type: 'Экспресс-отправление',
    status: 'Готов к выдаче',
    weight: 1.3,
    dimensions: '30 × 30 × 20',
    declaredValue: 120,
    cost: 19.5,
    senderName: 'Лебедева Ольга Ивановна',
    senderPhone: '+375 29 888-77-66',
    senderAddress: 'г. Минск, ул. Богдановича, 21, кв. 4',
    senderIndex: '220029',
    senderEmail: 'lebedeva@example.by',
    recipientName: 'Никитин Сергей Павлович',
    recipientPhone: '+375 33 444-22-11',
    recipientAddress: 'г. Молодечно, ул. Вокзальная, 6, кв. 2',
    recipientIndex: '222310',
    recipientEmail: 'nikitin@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '9',
    description: 'Письмо в государственное учреждение',
    createdAt: new Date('2026-09-09T17:10:00'),
    author: 'Смирнова Ольга',
    trackNumber: 'RB100000009BY',
    type: 'Письмо',
    status: 'Заявка создана',
    weight: 0.1,
    dimensions: '22 × 11 × 1',
    declaredValue: 5,
    cost: 3.1,
    senderName: 'Андреев Виктор Михайлович',
    senderPhone: '+375 25 555-44-33',
    senderAddress: 'г. Полоцк, ул. Нижне-Покровская, 10',
    senderIndex: '211400',
    senderEmail: 'andreev@example.by',
    recipientName: 'Городской исполнительный комитет',
    recipientPhone: '+375 214 42-00-00',
    recipientAddress: 'г. Полоцк, ул. Толстого, 6',
    recipientIndex: '211400',
    recipientEmail: 'polotsk@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '10',
    description: 'Посылка с бытовой техникой',
    createdAt: new Date('2026-09-14T08:55:00'),
    author: 'Ясинский Кирилл',
    photoLink: 'https://picsum.photos/seed/parcel10/200/150',
    trackNumber: 'RB100000010BY',
    type: 'Посылка',
    status: 'Доставлено',
    weight: 8.5,
    dimensions: '60 × 50 × 40',
    declaredValue: 750,
    cost: 38.7,
    senderName: 'ООО «ТехноМир»',
    senderPhone: '+375 17 400-50-60',
    senderAddress: 'г. Минск, ул. Кульман, 22',
    senderIndex: '220013',
    senderEmail: 'sales@technomir.by',
    recipientName: 'Белов Артём Сергеевич',
    recipientPhone: '+375 29 123-98-76',
    recipientAddress: 'г. Слуцк, ул. Ленина, 33, кв. 18',
    recipientIndex: '223610',
    recipientEmail: 'belov@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Картой через кассу курьера'
  },
  {
    id: '11',
    description: 'Возврат бандероли из-за неверного адреса',
    createdAt: new Date('2026-09-19T12:15:00'),
    author: 'Соколовский Ян',
    trackNumber: 'RB100000011BY',
    type: 'Бандероль',
    status: 'Возврат отправителю',
    weight: 0.9,
    dimensions: '35 × 25 × 10',
    declaredValue: 40,
    cost: 7.8,
    senderName: 'ООО «Книжный мир»',
    senderPhone: '+375 17 270-80-90',
    senderAddress: 'г. Минск, пр-т Победителей, 18',
    senderIndex: '220020',
    senderEmail: 'shop@bookworld.by',
    recipientName: 'Захаров Илья Владимирович',
    recipientPhone: '+375 44 654-32-10',
    recipientAddress: 'г. Лида, ул. Советская, 12, кв. 5',
    recipientIndex: '231300',
    recipientEmail: 'zaharov@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '12',
    description: 'Экспресс-доставка договора в офис',
    createdAt: new Date('2026-09-23T14:35:00'),
    author: 'Смирнова Ольга',
    trackNumber: 'RB100000012BY',
    type: 'Экспресс-отправление',
    status: 'В пути',
    weight: 0.3,
    dimensions: '30 × 22 × 3',
    declaredValue: 10,
    cost: 16.2,
    senderName: 'ООО «Право и бизнес»',
    senderPhone: '+375 17 290-11-12',
    senderAddress: 'г. Минск, ул. Мясникова, 4',
    senderIndex: '220030',
    senderEmail: 'office@lawbusiness.by',
    recipientName: 'ООО «Гомельстрой»',
    recipientPhone: '+375 232 55-66-77',
    recipientAddress: 'г. Гомель, ул. Кирова, 50',
    recipientIndex: '246000',
    recipientEmail: 'info@gomelstroy.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '13',
    description: 'Посылка с лекарствами',
    createdAt: new Date('2026-09-28T10:50:00'),
    author: 'Ясинский Кирилл',
    trackNumber: 'RB100000013BY',
    type: 'Посылка',
    status: 'Готов к выдаче',
    weight: 1.7,
    dimensions: '30 × 25 × 15',
    declaredValue: 90,
    cost: 11.3,
    senderName: 'Романова Светлана Петровна',
    senderPhone: '+375 29 333-22-11',
    senderAddress: 'г. Минск, ул. Одоевского, 7, кв. 31',
    senderIndex: '220015',
    senderEmail: 'romanova@example.by',
    recipientName: 'Тихонова Наталья Ивановна',
    recipientPhone: '+375 33 222-99-88',
    recipientAddress: 'г. Бобруйск, ул. Пушкина, 16, кв. 9',
    recipientIndex: '213800',
    recipientEmail: 'tihonova@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '14',
    description: 'Письмо с приглашением на конференцию',
    createdAt: new Date('2026-10-02T16:05:00'),
    author: 'Соколовский Ян',
    trackNumber: 'RB100000014BY',
    type: 'Письмо',
    status: 'Заявка создана',
    weight: 0.1,
    dimensions: '22 × 11 × 1',
    declaredValue: 5,
    cost: 3.1,
    senderName: 'БГУ, факультет прикладной математики',
    senderPhone: '+375 17 209-50-00',
    senderAddress: 'г. Минск, пр-т Независимости, 4',
    senderIndex: '220030',
    senderEmail: 'fpmi@bsu.by',
    recipientName: 'Институт математики НАН Беларуси',
    recipientPhone: '+375 17 284-17-00',
    recipientAddress: 'г. Минск, ул. Сурганова, 11',
    recipientIndex: '220072',
    recipientEmail: 'im@bas-net.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '15',
    description: 'Посылка с детскими игрушками',
    createdAt: new Date('2026-10-07T09:30:00'),
    author: 'Смирнова Ольга',
    photoLink: 'https://picsum.photos/seed/parcel15/200/150',
    trackNumber: 'RB100000015BY',
    type: 'Посылка',
    status: 'Доставлено',
    weight: 3.6,
    dimensions: '50 × 35 × 30',
    declaredValue: 180,
    cost: 17.4,
    senderName: 'ООО «Детский мир»',
    senderPhone: '+375 17 222-33-44',
    senderAddress: 'г. Минск, ул. Веры Хоружей, 8',
    senderIndex: '220123',
    senderEmail: 'shop@childworld.by',
    recipientName: 'Климова Дарья Алексеевна',
    recipientPhone: '+375 29 777-11-22',
    recipientAddress: 'г. Жлобин, ул. Первомайская, 20, кв. 6',
    recipientIndex: '247210',
    recipientEmail: 'klimova@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '16',
    description: 'Бандероль с фотографиями',
    createdAt: new Date('2026-10-12T11:45:00'),
    author: 'Ясинский Кирилл',
    trackNumber: 'RB100000016BY',
    type: 'Бандероль',
    status: 'В пути',
    weight: 0.5,
    dimensions: '35 × 25 × 8',
    declaredValue: 25,
    cost: 6.9,
    senderName: 'Васильев Олег Дмитриевич',
    senderPhone: '+375 44 321-00-11',
    senderAddress: 'г. Минск, ул. Якуба Коласа, 15, кв. 20',
    senderIndex: '220013',
    senderEmail: 'vasiliev@example.by',
    recipientName: 'Мельникова Юлия Сергеевна',
    recipientPhone: '+375 33 600-50-40',
    recipientAddress: 'г. Орша, ул. Мира, 11, кв. 4',
    recipientIndex: '211030',
    recipientEmail: 'melnikova@example.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '17',
    description: 'Экспресс-отправление с ключами',
    createdAt: new Date('2026-10-17T15:20:00'),
    author: 'Соколовский Ян',
    photoLink: 'https://picsum.photos/seed/parcel17/200/150',
    trackNumber: 'RB100000017BY',
    type: 'Экспресс-отправление',
    status: 'Готов к выдаче',
    weight: 0.2,
    dimensions: '25 × 20 × 5',
    declaredValue: 15,
    cost: 14.8,
    senderName: 'Павлов Роман Игоревич',
    senderPhone: '+375 29 456-78-90',
    senderAddress: 'г. Минск, ул. Зыбицкая, 3, кв. 12',
    senderIndex: '220030',
    senderEmail: 'pavlov@example.by',
    recipientName: 'Семёнова Алина Викторовна',
    recipientPhone: '+375 44 987-12-34',
    recipientAddress: 'г. Гомель, ул. Барыкина, 40, кв. 9',
    recipientIndex: '246000',
    recipientEmail: 'semenova@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Картой через кассу курьера'
  },
  {
    id: '18',
    description: 'Письмо с бухгалтерской документацией',
    createdAt: new Date('2026-10-22T08:40:00'),
    author: 'Смирнова Ольга',
    trackNumber: 'RB100000018BY',
    type: 'Письмо',
    status: 'Заявка создана',
    weight: 0.1,
    dimensions: '22 × 11 × 1',
    declaredValue: 5,
    cost: 3.1,
    senderName: 'ООО «Аудит Плюс»',
    senderPhone: '+375 17 211-22-33',
    senderAddress: 'г. Минск, ул. Комсомольская, 7',
    senderIndex: '220029',
    senderEmail: 'office@auditplus.by',
    recipientName: 'ООО «Логистик Групп»',
    recipientPhone: '+375 17 244-55-66',
    recipientAddress: 'г. Минск, ул. Толстого, 10',
    recipientIndex: '220004',
    recipientEmail: 'info@logistic.by',
    deliveryMethod: 'В отделении связи',
    paymentMethod: 'Банковский перевод онлайн'
  },
  {
    id: '19',
    description: 'Возврат посылки с повреждённой упаковкой',
    createdAt: new Date('2026-10-27T13:55:00'),
    author: 'Ясинский Кирилл',
    trackNumber: 'RB100000019BY',
    type: 'Посылка',
    status: 'Возврат отправителю',
    weight: 2.2,
    dimensions: '40 × 30 × 20',
    declaredValue: 130,
    cost: 13.6,
    senderName: 'ООО «Домовой»',
    senderPhone: '+375 17 333-44-55',
    senderAddress: 'г. Минск, ул. Ульяновская, 6',
    senderIndex: '220030',
    senderEmail: 'shop@domovoi.by',
    recipientName: 'Егоров Максим Олегович',
    recipientPhone: '+375 29 246-80-13',
    recipientAddress: 'г. Речица, ул. Советская, 28, кв. 3',
    recipientIndex: '247500',
    recipientEmail: 'egorov@example.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Наличными при передаче'
  },
  {
    id: '20',
    description: 'Посылка с канцелярскими товарами',
    createdAt: new Date('2026-11-01T10:10:00'),
    author: 'Соколовский Ян',
    photoLink: 'https://picsum.photos/seed/parcel20/200/150',
    trackNumber: 'RB100000020BY',
    type: 'Посылка',
    status: 'В пути',
    weight: 4.1,
    dimensions: '50 × 40 × 25',
    declaredValue: 220,
    cost: 20.5,
    senderName: 'ООО «ОфисСнаб»',
    senderPhone: '+375 17 500-60-70',
    senderAddress: 'г. Минск, ул. Ботаническая, 14',
    senderIndex: '220089',
    senderEmail: 'sales@officesnab.by',
    recipientName: 'ООО «Школа будущего»',
    recipientPhone: '+375 232 40-50-60',
    recipientAddress: 'г. Гомель, ул. Интернациональная, 15',
    recipientIndex: '246000',
    recipientEmail: 'school@future.by',
    deliveryMethod: 'Курьером до двери',
    paymentMethod: 'Банковский перевод онлайн'
  }
];

class ObjCollection {
  constructor(objs = []) {
    this._objs = [];
    this.addAll(objs);
  }

  getObjs(skip = 0, top = 10, filterConfig = {}) {
    const safeSkip = Number.isInteger(skip) && skip >= 0 ? skip : 0;
    const safeTop = Number.isInteger(top) && top >= 0 ? top : 10;
    const filters = filterConfig && typeof filterConfig === 'object' && !Array.isArray(filterConfig)
      ? filterConfig
      : {};
    const sortField = typeof filters.sortField === 'string' ? filters.sortField : 'createdAt';
    const sortDirection = filters.sortDirection === 'asc' ? 'asc' : 'desc';
    return this._sort(this._filter(this._objs, filters), sortField, sortDirection)
      .slice(safeSkip, safeSkip + safeTop)
      .map(obj => ({ ...obj }));
  }

  getObj(id) {
    if (typeof id !== 'string') {
      return null;
    }
    const obj = this._objs.find(item => item.id === id);
    return obj ? { ...obj } : null;
  }

  validateObj(obj) {
    return this._validateObj(obj);
  }

  addObj(obj) {
    if (!this._validateObj(obj) || this._objs.some(item => item.id === obj.id)) {
      return false;
    }
    this._objs.push({ ...obj });
    return true;
  }

  editObj(id, obj) {
    if (typeof id !== 'string' || !obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return false;
    }
    const index = this._objs.findIndex(item => item.id === id);
    if (index === -1 || ['id', 'author', 'createdAt'].some(field => field in obj)) {
      return false;
    }
    const updated = { ...this._objs[index], ...obj };
    if (!this._validateObj(updated)) {
      return false;
    }
    this._objs[index] = updated;
    return true;
  }

  removeObj(id) {
    if (typeof id !== 'string') {
      return false;
    }
    const index = this._objs.findIndex(item => item.id === id);
    if (index === -1) {
      return false;
    }
    this._objs.splice(index, 1);
    return true;
  }

  addAll(objs) {
    if (!Array.isArray(objs)) {
      return [];
    }
    const added = [];
    objs.forEach(obj => {
      if (this.addObj(obj)) {
        added.push({ ...obj });
      }
    });
    return added;
  }

  clear() {
    this._objs = [];
  }

  size() {
    return this._objs.length;
  }

  _validateObj(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return false;
    }
    if (typeof obj.id !== 'string' || obj.id.trim() === '') {
      return false;
    }
    if (typeof obj.description !== 'string' || obj.description.trim() === '' || obj.description.length >= 200) {
      return false;
    }
    if (Object.prototype.toString.call(obj.createdAt) !== '[object Date]' || Number.isNaN(obj.createdAt.getTime())) {
      return false;
    }
    if (typeof obj.author !== 'string' || obj.author.trim() === '') {
      return false;
    }
    if (obj.photoLink !== undefined && typeof obj.photoLink !== 'string') {
      return false;
    }
    const stringFields = [
      'trackNumber',
      'type',
      'status',
      'senderName',
      'senderPhone',
      'senderAddress',
      'senderIndex',
      'senderEmail',
      'recipientName',
      'recipientPhone',
      'recipientAddress',
      'recipientIndex',
      'recipientEmail',
      'dimensions',
      'deliveryMethod',
      'paymentMethod'
    ];
    for (const field of stringFields) {
      if (obj[field] !== undefined && (typeof obj[field] !== 'string' || obj[field].trim() === '')) {
        return false;
      }
    }
    const numberFields = ['weight', 'declaredValue', 'cost'];
    for (const field of numberFields) {
      if (obj[field] !== undefined && (!Number.isFinite(obj[field]) || obj[field] < 0)) {
        return false;
      }
    }
    return true;
  }

  _filter(objs, filters) {
    const ignored = ['sortField', 'sortDirection'];
    const entries = Object.entries(filters).filter(([field, value]) => {
      return !ignored.includes(field) && value !== undefined && value !== null && value !== '';
    });
    if (entries.length === 0) {
      return objs.slice();
    }
    return objs.filter(obj => entries.every(([field, value]) => {
      const objValue = obj[field];
      if (objValue === undefined) {
        return false;
      }
      if (objValue instanceof Date) {
        return this._dateKey(objValue) === this._filterDateKey(value);
      }
      if (typeof objValue === 'number') {
        return objValue === Number(value);
      }
      return String(objValue).toLowerCase().includes(String(value).toLowerCase());
    }));
  }

  _sort(objs, field, direction) {
    const factor = direction === 'asc' ? 1 : -1;
    return objs.slice().sort((a, b) => {
      const aValue = a[field] instanceof Date ? a[field].getTime() : a[field];
      const bValue = b[field] instanceof Date ? b[field].getTime() : b[field];
      if (aValue === undefined && bValue === undefined) {
        return 0;
      }
      if (aValue === undefined) {
        return 1;
      }
      if (bValue === undefined) {
        return -1;
      }
      if (aValue < bValue) {
        return -1 * factor;
      }
      if (aValue > bValue) {
        return 1 * factor;
      }
      return 0;
    });
  }

  _dateKey(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }

  _filterDateKey(value) {
    if (value instanceof Date) {
      return this._dateKey(value);
    }
    const text = String(value);
    const match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return match ? text : this._dateKey(new Date(text));
  }
}
