import Api from './api';
function callOnce(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

function trackExceptions() {
  if (typeof window.onerror == 'object') {
    window.onerror = function (err, url, line) {
      // Api.sendEvent({
      //   type: 'exception',
      //   url,
      //   err,
      //   line,
      //   ex_description: line + ' ' + err,
      // });
    };
  }
}

function trackSearch(payload) {
  // Api.sendEvent({
  //   type: 'search',
  //   ...payload,
  // });
}

const trackTimeSpent = callOnce(() => {
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs + ':' + mins + ':' + secs + '.' + ms;
  }

  let startDate = new Date();
  let elapsedTime = 0;

  const focus = function () {
    startDate = new Date();
  };

  const blur = function () {
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();
    elapsedTime += spentTime;
  };

  const beforeunload = function () {
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();

    elapsedTime += spentTime;
    // Api.sendEvent({
    //   type: 'time-spent',
    //   time: msToTime(spentTime),
    //   time_ms: spentTime,
    // });

    // elapsedTime contains the time spent on page in milliseconds
    // TODO: Send GA Event
  };

  window.addEventListener('focus', focus);
  window.addEventListener('blur', blur);
  window.addEventListener('beforeunload', beforeunload);
});

const trackVisit = () => {
  Api.sendEvent({ type: 'visit', referrer: document.referrer });
}

function trackSuggestedFeautre(givenFeedback) {
  Api.sendEvent({ type: 'suggested-feautre', content: givenFeedback });
}

function trackContactUs(data) {
  Api.sendEvent({ type: 'contact', data });
}

function trackBuySubscriptionInterestContact(requirements) {
  Api.sendEvent({ type: 'buy-subscription-interest-contact', requirements });
}

const Analytics = {
  trackBuySubscriptionInterestContact,
  trackContactUs,
  trackSuggestedFeautre,
  trackExceptions,
  trackSearch,
  trackTimeSpent,
  trackVisit,
};

export default Analytics;
