chrome.webNavigation.onBeforeNavigate.addListener(function (obj) {
    var tabId = obj.tabId;
    var old_query_str = "?oldIssueView=true"
    var old_jira_url = obj.url + old_query_str
    if (obj.url.indexOf(old_query_str) < 0) {
        chrome.tabs.update(tabId, { url: old_jira_url });
    }
}, { url: [{ hostContains: 'atlassian.net', pathContains: 'browse' }] });
