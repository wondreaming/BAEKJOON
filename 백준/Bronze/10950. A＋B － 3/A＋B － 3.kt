fun main() {
    val T = readln().toInt()

    for (i in 1..T) {
        val nums = readln().split(" ").map{ it.toInt() }
        
        val A = nums[0]
        val B = nums[1]
        
        println(A + B)
    }
}