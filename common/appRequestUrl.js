const baseUrl = "http://192.168.1.8:9091/MySchool";

const getArticle = baseUrl +"/article/getArticleByParam";//参数data

const addArticle = baseUrl +"/article/addArticleByParam";//参数data

const delArticle = baseUrl +"/article/delArticleById";//参数data

const loginCheck = baseUrl +"/user/getUserInfo";//参数data

const getDeptData = baseUrl +"/dept/getDeptData";//参数level

const getCommentByUserAndType = baseUrl +"/comment/getCommentByUserAndType";//参数data

const getComment = baseUrl +"/comment/getComment";//参数data

const delComment = baseUrl +"/comment/delComment";//参数data

const addComment = baseUrl +"/comment/addComment";//参数data

const getArticleByUserNo = baseUrl +"/article/getArticleByUserNo";//参数data

const queryByAritcleParam = baseUrl +"/comment/queryByAritcleParam";//参数data

const checkStudent = baseUrl +"/user/checkStudent";//参数data

const getUserInfo = function(){
	try {
		const value = uni.getStorageSync('userInfo');
		console.log(JSON.stringify(value));
		return value ? value : false;
	} catch (e) {
		return false;
	}
}

const request = function(requestOpt) {
	try {
		requestOpt = requestOpt || {};
		if (!requestOpt.url) {
			requestFail();
			return;
		}
		requestOpt.data = requestOpt.data || {};
		requestOpt.method = requestOpt.method || 'POST';
		requestOpt.header = requestOpt.header || {
			'content-type': 'application/x-www-form-urlencoded'
		};
		requestOpt.timeout = requestOpt.timeout || 30000;
		requestOpt.responseType = requestOpt.responseType || 'text';
		requestOpt.dataType = requestOpt.dataType || "json";
		requestOpt.sslVerify = requestOpt.sslVerify || true;
		requestOpt.success = requestOpt.success || function(res) {};
		requestOpt.fail = requestOpt.fail || function(res) {};
		requestOpt.complete = requestOpt.complete || function(res) {};
		uni.showLoading({title:"加载中"});
		try {
			const value = uni.getStorageSync('userInfo');
			if (value) {
				requestOpt.data['token'] = value.token;
			}
		} catch (e) {
			requestOpt.data['token'] = "";
		}
		uni.request({
			url: requestOpt.url,
			data: requestOpt.data,
			method: requestOpt.method,
			responseType: requestOpt.responseType,
			sslVerify: requestOpt.sslVerify,
			timeout: requestOpt.timeout,
			dataType: requestOpt.dataType,
			header: requestOpt.header,
			success: function(res) {
				requestOpt.success(res);
			},
			fail: function(res) {
				requestOpt.fail(res);
			},
			complete: function(res) {
				uni.hideLoading();
			}
		});
	} catch (e) {
		//TODO handle the exception
		uni.hideLoading();
		uni.showToast({
			icon:"none",
			title:"请求异常"
		})
	}
}

export default {
	getUserInfo,
	getArticle,
	baseUrl,
	request,
	loginCheck,
	getDeptData,
	addArticle,
	delArticle,
	getCommentByUserAndType,
	delComment,
	addComment,
	getComment,
	getArticleByUserNo,
	queryByAritcleParam,
	checkStudent
}