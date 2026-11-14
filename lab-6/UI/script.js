const user = 'Ясинский Кирилл';

const collection = new ObjCollection(ObjInf);

class View {
  constructor(model, currentUser) {
    this._model = model;
    this._user = currentUser;
    this._filterConfig = {};
    this._editId = null;
    this._list = document.querySelector('#orders .data-table');
    this._count = document.querySelector('#orders-count');
    this._addButton = document.querySelector('#orders .page-head .btn-primary');
    this._userBox = document.querySelector('.header-actions');
    this._statusSelect = document.querySelector('#f-status');
    this._typeSelect = document.querySelector('#f-type');
    this._detailFields = document.querySelectorAll('#order-view dd[data-field]');
  }

  render() {
    this.renderUser();
    this.fillFilters();
    this.renderList();
    const first = this._model.getObjs(0, 1)[0];
    if (first) {
      this.renderDetail(first.id);
      this.renderEdit(first.id);
    } else {
      this._detailFields.forEach(field => {
        field.textContent = '—';
      });
      this._editId = null;
    }
  }

  renderUser() {
    this._userBox.replaceChildren();
    if (this._user) {
      const label = document.createElement('span');
      label.className = 'muted small';
      label.textContent = `Пользователь: ${this._user}`;
      this._userBox.append(label);
    } else {
      const link = document.createElement('a');
      link.className = 'btn btn-secondary btn-sm';
      link.href = '#login';
      link.textContent = 'Войти';
      this._userBox.append(link);
    }
    this._addButton.hidden = !this._user;
    document.querySelectorAll('#order-view .page-actions a[href="#order-edit"], #order-view .page-actions a[href="#delete"]').forEach(link => {
      link.hidden = !this._user;
    });
  }

  fillFilters() {
    const objects = this._model.getObjs(0, this._model.size());
    const statuses = [...new Set(objects.map(obj => obj.status).filter(Boolean))];
    const types = [...new Set(objects.map(obj => obj.type).filter(Boolean))];
    this._fillSelect(this._statusSelect, 'Все статусы', statuses);
    this._fillSelect(this._typeSelect, 'Все типы', types);
  }

  renderList() {
    this._list.querySelectorAll('.data-row:not(.data-head)').forEach(row => row.remove());
    const objects = this._model.getObjs(0, this._model.size(), this._filterConfig);
    objects.forEach(obj => this._list.append(this._createRow(obj)));
    this._count.textContent = `Показано ${objects.length} из ${this._model.size()}`;
    this._syncFilters();
  }

  setFilter(config) {
    this._filterConfig = config && typeof config === 'object' && !Array.isArray(config) ? { ...config } : {};
    this.renderList();
  }

  applyUiFilters() {
    const track = document.querySelector('#f-track').value.trim();
    const status = document.querySelector('#f-status').value;
    const type = document.querySelector('#f-type').value;
    const date = document.querySelector('#f-date').value;
    const config = {};
    if (track) {
      config.trackNumber = track;
    }
    if (status && status !== 'Все статусы') {
      config.status = status;
    }
    if (type && type !== 'Все типы') {
      config.type = type;
    }
    if (date) {
      config.createdAt = date;
    }
    this.setFilter(config);
  }

  resetFilters() {
    this._filterConfig = {};
    document.querySelector('#f-track').value = '';
    document.querySelector('#f-date').value = '';
    this._statusSelect.value = 'Все статусы';
    this._typeSelect.value = 'Все типы';
    this.renderList();
  }

  renderDetail(id) {
    const obj = this._model.getObj(id);
    if (!obj) {
      return false;
    }
    this._detailFields.forEach(field => {
      field.textContent = this._detailText(field.dataset.field, obj);
    });
    const breadcrumb = document.querySelector('#order-view .breadcrumbs span:last-child');
    const title = document.querySelector('#order-view-title');
    const subtitle = document.querySelector('#order-view .page-head p');
    const trackNumber = obj.trackNumber || obj.id;
    if (breadcrumb) {
      breadcrumb.textContent = trackNumber;
    }
    if (title) {
      title.textContent = `Отправление ${trackNumber}`;
    }
    if (subtitle) {
      subtitle.replaceChildren(`${obj.type || '—'} · создано ${this._formatDate(obj.createdAt)} · `);
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = obj.status || '—';
      subtitle.append(badge);
    }
    const history = document.querySelector('#order-history');
    if (history) {
      const item = document.createElement('li');
      const status = document.createElement('strong');
      status.textContent = obj.status || '—';
      const time = document.createElement('time');
      time.className = 'time';
      time.textContent = `${this._formatDate(obj.createdAt)} · создано ${obj.author || '—'}`;
      item.append(status, time);
      history.replaceChildren(item);
    }
    return true;
  }

  renderEdit(id) {
    const obj = this._model.getObj(id);
    if (!obj) {
      return false;
    }
    this._editId = id;
    const values = {
      'edit-type': obj.type,
      'edit-weight': obj.weight,
      'edit-size': obj.dimensions,
      'edit-value': obj.declaredValue,
      'edit-recipient-name': obj.recipientName,
      'edit-recipient-phone': obj.recipientPhone,
      'edit-recipient-address': obj.recipientAddress,
      'edit-recipient-index': obj.recipientIndex,
      'edit-recipient-email': obj.recipientEmail,
      'edit-delivery': obj.deliveryMethod,
      'edit-payment': obj.paymentMethod
    };
    Object.entries(values).forEach(([id, value]) => {
      const field = document.getElementById(id);
      if (field) {
        field.value = value === undefined || value === null ? '' : value;
      }
    });
    const subtitle = document.querySelector('#order-edit .page-head p');
    if (subtitle) {
      subtitle.textContent = `${obj.trackNumber || obj.id} · изменения сохраняются в журнале аудита.`;
    }
    return true;
  }

  openObj(id) {
    if (!this.renderDetail(id)) {
      return false;
    }
    location.hash = '#order-view';
    return true;
  }

  openEdit(id) {
    if (!this.renderEdit(id)) {
      return false;
    }
    location.hash = '#order-edit';
    return true;
  }

  _createRow(obj) {
    const row = document.createElement('li');
    row.className = 'data-row';
    row.dataset.id = obj.id;
    const track = document.createElement('span');
    track.dataset.label = 'Трек-номер';
    track.textContent = obj.trackNumber || obj.id;
    const recipient = document.createElement('span');
    recipient.dataset.label = 'Получатель';
    const recipientName = document.createElement('span');
    recipientName.textContent = obj.recipientName || '—';
    recipient.append(recipientName);
    const description = document.createElement('small');
    description.className = 'muted';
    description.textContent = obj.description;
    recipient.append(description);
    const type = document.createElement('span');
    type.dataset.label = 'Тип';
    type.textContent = obj.type || '—';
    const status = document.createElement('span');
    status.dataset.label = 'Статус';
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = obj.status || '—';
    status.append(badge);
    const cost = document.createElement('span');
    cost.dataset.label = 'Сумма';
    cost.textContent = this._money(obj.cost);
    const actions = document.createElement('span');
    actions.className = 'row-actions';
    const open = document.createElement('a');
    open.href = '#order-view';
    open.textContent = 'Открыть';
    open.dataset.action = 'open';
    open.dataset.id = obj.id;
    actions.append(open);
    if (this._user) {
      const edit = document.createElement('a');
      edit.href = '#order-edit';
      edit.textContent = 'Изменить';
      edit.dataset.action = 'edit';
      edit.dataset.id = obj.id;
      const remove = document.createElement('a');
      remove.href = '#delete';
      remove.textContent = 'Удалить';
      remove.dataset.action = 'remove';
      remove.dataset.id = obj.id;
      actions.append(edit, remove);
    }
    row.append(track, recipient, type, status, cost, actions);
    return row;
  }

  _fillSelect(select, allLabel, values) {
    if (!select) {
      return;
    }
    const current = select.value;
    select.replaceChildren();
    const all = document.createElement('option');
    all.textContent = allLabel;
    all.value = allLabel;
    select.append(all);
    values.forEach(value => {
      const option = document.createElement('option');
      option.textContent = value;
      option.value = value;
      select.append(option);
    });
    if ([...select.options].some(option => option.value === current)) {
      select.value = current;
    }
  }

  _syncFilters() {
    const track = document.querySelector('#f-track');
    const date = document.querySelector('#f-date');
    track.value = this._filterConfig.trackNumber || '';
    date.value = this._inputDate(this._filterConfig.createdAt);
    this._statusSelect.value = this._filterConfig.status || 'Все статусы';
    this._typeSelect.value = this._filterConfig.type || 'Все типы';
  }

  _detailText(field, obj) {
    switch (field) {
      case 'weight':
        return obj.weight === undefined ? '—' : `${obj.weight} кг`;
      case 'dimensions':
        return obj.dimensions ? `${obj.dimensions} см` : '—';
      case 'declaredValue':
        return this._money(obj.declaredValue);
      case 'cost':
        return this._money(obj.cost);
      case 'payment':
        return obj.paymentMethod || '—';
      case 'recipientAddress':
        return [obj.recipientAddress, obj.recipientIndex].filter(Boolean).join(', ') || '—';
      default:
        return obj[field] === undefined || obj[field] === null || obj[field] === '' ? '—' : obj[field];
    }
  }

  _money(value) {
    return Number.isFinite(value) ? `${value.toFixed(2).replace('.', ',')} BYN` : '—';
  }

  _formatDate(value) {
    if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
      return '—';
    }
    return value.toLocaleDateString('ru-RU');
  }

  _inputDate(value) {
    if (value instanceof Date) {
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const day = String(value.getDate()).padStart(2, '0');
      return `${value.getFullYear()}-${month}-${day}`;
    }
    return typeof value === 'string' ? value.slice(0, 10) : '';
  }
}

const view = new View(collection, user);

const App = {
  collection,
  view,
  getObjs(skip, top, filterConfig) {
    return collection.getObjs(skip, top, filterConfig);
  },
  getObj(id) {
    return collection.getObj(id);
  },
  validateObj(obj) {
    return collection.validateObj(obj);
  },
  addObj(obj) {
    if (!user || !obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return false;
    }
    const data = { ...obj };
    if (!data.author) {
      data.author = user;
    }
    if (!collection.addObj(data)) {
      return false;
    }
    view.render();
    return true;
  },
  editObj(id, obj) {
    if (!user || !collection.editObj(id, obj)) {
      return false;
    }
    view.render();
    return true;
  },
  removeObj(id) {
    if (!user || !collection.removeObj(id)) {
      return false;
    }
    view.render();
    return true;
  },
  addAll(objs) {
    if (!user || !Array.isArray(objs)) {
      return [];
    }
    const data = objs.map(obj => {
      const item = { ...obj };
      if (!item.author) {
        item.author = user;
      }
      return item;
    });
    const added = collection.addAll(data);
    if (added.length > 0) {
      view.render();
    }
    return added;
  },
  clear() {
    if (!user) {
      return false;
    }
    collection.clear();
    view.render();
    return true;
  },
  filterObjs(config) {
    view.setFilter(config);
  },
  applyFilters() {
    view.applyUiFilters();
  },
  resetFilters() {
    view.resetFilters();
  },
  openObj(id) {
    return view.openObj(id);
  },
  openEdit(id) {
    return view.openEdit(id);
  }
};

window.App = App;
App.view.render();
