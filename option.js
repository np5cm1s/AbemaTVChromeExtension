$(function(){
    chrome.storage.local.get(function (value) {
        var isResizeScreen = value.resizeScreen || false;
        console.log(value.movingCommentLimit)
        var isDblFullscreen = value.dblFullscreen || false;
        var isEnterSubmit = value.enterSubmit || false;
        var isHideOldComment = value.hideOldComment || false;
        var isCMBlack = value.CMBlack || false;
        var isCMBkTrans = value.CMBkTrans || false;
        var isCMsoundoff = value.CMsoundoff || false;
        var isMovingComment = value.movingComment || false;
        var movingCommentSpeed = value.movingCommentSpeed || 15;
        var movingCommentLimit = value.movingCommentLimit || 30;
        var isComeNg = value.comeNg || false;
        var isComeDel = value.comeDel || false;
        var valFullNg = value.fullNg || "";
        var isInpWinBottom = value.inpWinBottom || false;
        var isCustomPostWin = value.customPostWin || false;
        var isCancelWheel = value.cancelWheel || false;
        var isTimeVisible = value.timeVisible || false;
        var isSureReadComment = value.sureReadComment || false;
        $("#isResizeScreen").prop("checked", isResizeScreen);
        $("#isDblFullscreen").prop("checked", isDblFullscreen);
        $("#isEnterSubmit").prop("checked", isEnterSubmit);
        $("#isHideOldComment").prop("checked", isHideOldComment);
        $("#isCMBlack").prop("checked", isCMBlack);
        $("#isCMBkTrans").prop("checked", isCMBkTrans);
        $("#isCMsoundoff").prop("checked", isCMsoundoff);
        $("#isMovingComment").prop("checked", isMovingComment);
        $("#movingCommentSpeed").val(movingCommentSpeed);
        $("#movingCommentLimit").val(movingCommentLimit);
        $("#isComeNg").prop("checked", isComeNg);
        $("#isComeDel").prop("checked", isComeDel);
        $("#elmFullNg").val(valFullNg);
        $("#isInpWinBottom").prop("checked", isInpWinBottom);
        $("#isCustomPostWin").prop("checked", isCustomPostWin);
        $("#isCancelWheel").prop("checked", isCancelWheel);
        $("#isTimeVisible").prop("checked", isTimeVisible);
        $("#isSureReadComment").prop("checked", isSureReadComment);
    });
    $("#saveBtn").click(function () {
    chrome.storage.local.set({
        "resizeScreen": $("#isResizeScreen").prop("checked"), 
        "dblFullscreen": $("#isDblFullscreen").prop("checked"),
        "enterSubmit": $("#isEnterSubmit").prop("checked"),
        "hideOldComment": $("#isHideOldComment").prop("checked"),
        "CMBlack": $("#isCMBlack").prop("checked"),
        "CMBkTrans": $("#isCMBkTrans").prop("checked"),
        "CMsoundoff": $("#isCMsoundoff").prop("checked"),
        "movingComment": $("#isMovingComment").prop("checked"),
        "movingCommentSpeed": parseInt($("#movingCommentSpeed").val()),
        "movingCommentLimit": parseInt($("#movingCommentLimit").val()),
        "comeNg": $("#isComeNg").prop("checked"),
        "comeDel": $("#isComeDel").prop("checked"),
        "fullNg": $("#elmFullNg").val(),
        "inpWinBottom": $("#isInpWinBottom").prop("checked"),
        "customPostWin": $("#isCustomPostWin").prop("checked"),
        "cancelWheel": $("#isCancelWheel").prop("checked"),
        "timeVisible": $("#isTimeVisible").prop("checked"),
        "sureReadComment": $("#isSureReadComment").prop("checked")
    }, function () {
        $("#info").show().text("設定保存しました").fadeOut(4000);
    });
});
});
