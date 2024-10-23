class Solution {
    fun solution(a: Int, b: Int): Int {
        var answer: Int = 0
        val stringA = a.toString()
        val stringB = b.toString()
        
        val stringAPlusStringB = (stringA + stringB).toInt()
        val stringBPlusStringA = (stringB + stringA).toInt()
        
        when {
            stringAPlusStringB > stringBPlusStringA -> {answer = stringAPlusStringB}
            else -> {answer = stringBPlusStringA}
        }
        return answer
    }
}