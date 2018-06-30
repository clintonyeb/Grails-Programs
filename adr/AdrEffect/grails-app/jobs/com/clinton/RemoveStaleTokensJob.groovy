package com.clinton

class RemoveStaleTokensJob {
    static triggers = {
        cron name: 'removeToken', cronExpression: '0 0 */6 * * ?'
    }

    def execute() {
        println('clearing...............')
        AuthenticationToken.executeUpdate('delete AuthenticationToken a where a.refreshed < ?', [new Date()-1])
    }
}
