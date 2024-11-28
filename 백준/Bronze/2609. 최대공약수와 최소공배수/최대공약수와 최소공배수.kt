fun main() {
    val (N, M) = readln().split(" ").map { it.toInt() }
    println(gcd(N, M))
    println(lcm(N, M))
}

fun gcd(a: Int, b: Int): Int {
    var a = a
    var b = b
    while (b != 0) {
        val temp = a % b
        a = b
        b = temp
    }
    return a
}

fun lcm(a: Int, b: Int): Int {
    return a * (b / gcd(a, b))
}