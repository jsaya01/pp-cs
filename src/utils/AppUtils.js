import { SECRET_KEY } from "const/variables";

const AppUtils = {
  showMessage: (key, message) => {
    if (typeof message === 'undefined') {
      console.log(key)
    }
    else {
      console.log(key, message)
    }
  },
  getCommonHeaders() {
    const accessToken = localStorage.getItem('admin_access_token');

    const commonHeaders =
    {
      'Content-Type': 'application/json'
    };
    if (accessToken) {
      commonHeaders.Authorization = `Bearer ${accessToken}`;
    }

    return commonHeaders;
  },
  getMultipartHeaders() {
    const accessToken = localStorage.getItem('admin_access_token');
    const commonHeaders =
    {
      'Content-Type': 'multipart/form-data'
    };
    if (accessToken) {
      commonHeaders.Authorization = `Bearer ${accessToken}`;
    }
    return commonHeaders;
  },
  getStripeHeaders() {
    const commonHeaders = {
      'Authorization': `Bearer ${SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return commonHeaders;
  },
  async dataUrlToFile(dataUrl, fileName) {
    if (!fileName) {
      fileName = new Date().getTime() + ".png"
    }
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
  },
  async dataUrlToMedia(file) {
    const { object, path } = file
    // const ext = object.name.substr(object.name.lastIndexOf(".")+1,object.name.length)

    const fileName = object.name
    const res = await fetch(path);
    const blob = await res.blob();
    return new File([blob], fileName, { type: object.type });
  },
  storeItem(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  reteriveItem(key) {
    let value = localStorage.getItem(key)
    if (value) {
      value = JSON.parse(value)
    }
    return value
  },
  formatDate(inputDate) {
    const fortnightAway = new Date(inputDate);
    const date = fortnightAway.getDate();
    const month = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUN", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"][fortnightAway.getMonth()];
    let formattedDate = `${month} ${date}${this.nth(date).sup()}, ${fortnightAway.getFullYear()}`
    // formattedDate = formattedDate.toUpperCase()
    return formattedDate
  },
  formatDate1(inputDate) {
    const fortnightAway = new Date(inputDate);
    const date = fortnightAway.getDate();

    const month = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUN", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"][fortnightAway.getMonth()];
    const day = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"][fortnightAway.getDay()];
    let formattedDate = `${day}, ${month} ${date}${this.nth(date).sup()}, ${fortnightAway.getFullYear()}`
    // formattedDate = formattedDate.toUpperCase()
    return formattedDate
  },
  nth(d) {
    // alert(d)
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  },
  makeUniqueId(length, onlyNumeric = false) {
    var result = '';
    var characters = onlyNumeric ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  capitalize(s) {
    if (typeof s !== 'string')
      return ''
    let string = s.charAt(0).toUpperCase() + s.slice(1)
    // console.log('string',string)
    return string
  },
  formatter(text) {
    text = text.replace(/^\D+/g, '');
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(text)
  },
  normalizePhoneInput(value, previousValue) {
    AppUtils.showMessage("value ", value)
    AppUtils.showMessage("previousValue ", previousValue)

    if (!value) return value; // return nothing if no value

    const onlyNums = value.replace(/[^\d]/g, ''); // only allows 0-9 inputs
    AppUtils.showMessage("onlyNums  ", onlyNums.length)
    if (!previousValue || value.length > previousValue.length) {
      // returns: "(xxx)"
      if (onlyNums.length <= 3) return onlyNums;

      // returns: "(xxx) xxx-"
      if (onlyNums.length === 6) return `${onlyNums.slice(0, 3)} ${onlyNums.slice(3)}`

      // returns: "x", "xx", "xxx"


      // returns: "(xxx) x", "(xxx) xx",
      if (onlyNums.length <= 6) return `${onlyNums.slice(0, 3)} ${onlyNums.slice(3)}`;

      // returns: "(xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx",
      return `${onlyNums.slice(0, 3)} ${onlyNums.slice(3, 6)} ${onlyNums.slice(6, 10)}`;
    }
  },
  formatPhoneNumber(value) {
    var numbers = value.replace(/\D/g, ''),
      char = { 0: '(', 3: ') ', 6: ' - ' };
    value = '';
    for (var i = 0; i < numbers.length; i++) {
      value += (char[i] || '') + numbers[i];
    }
    return value
  },
  formatDate(inputDate) {
    const fortnightAway = new Date(inputDate);
    const date = fortnightAway.getDate();
    const month = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUN", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"][fortnightAway.getMonth()];
    let formattedDate = `${month} ${date}, ${fortnightAway.getFullYear()}`
    // formattedDate = formattedDate.toUpperCase()
    return formattedDate
  },
}

export default AppUtils