fun main() {
    val (N, M) = readln().split(" ").map { it.toInt() }
    val nums = readln().split(" ").map { it.toInt() }
    val sumList = mutableListOf<Int>()

    for (i in 0..N - 3) {
        for (j in (i + 1)..N - 2) {
            for (k in (j + 1)..N -1) {
                val sum = nums[i] + nums[j] + nums[k];
                if (sum <= M) sumList.add(sum)
            }
        }
    }
    
    val result = sumList.sorted().last()
    println(result)
}