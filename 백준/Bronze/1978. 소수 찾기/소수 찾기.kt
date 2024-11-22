fun main() {
    val N = readln().toInt()
    val nums = readln().split(" ").map { it.toInt() }
    var count = 0

    for (i in 0 until N) {
        if (nums[i] == 1) continue
        var isPrime = true
        for (j in 2 until nums[i]) {
            if (nums[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) count++
    }
    println(count)
}