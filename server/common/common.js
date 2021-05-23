exports.wrapperResponse = function({ title = null, success = false, message = '' }) {
    let respData = {}
    if (!success && !title) title = 'Ошибка!'
    if (success && !title) title = 'Успешно!'
    if (title) respData.title = title
    if (message) respData.message = message
    respData.success = success
    return respData
}