class Solution {
    fun solution(str1: String, str2: String): String {
        var answer: String = ""
        for (index in 0..(str1.length)-1) {
            answer += str1[index]
            answer += str2[index]
        }
        return answer
    }
}