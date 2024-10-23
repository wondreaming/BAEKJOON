class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        
        val isEven = if (n % 2 == 0) true else false
        
        when (isEven){
            true -> {
                for (number in 1..n) {
                    if (number % 2 == 0) answer += number * number
                }
            }
            false -> {
                for (number in 1..n) {
                    if (number % 2 == 1) answer += number
                }
            }
        }
        return answer
    }
}