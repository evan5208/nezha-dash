import React, { useEffect, useState } from "react";

export default function Footer() {
  const [runtime, setRuntime] = useState("");

  useEffect(() => {
    const startTime = new Date("2020-01-01T00:00:00"); // 替换为你的网站上线时间
    const updateRuntime = () => {
      const now = new Date();
      const diffTime = Math.abs(now - startTime);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setRuntime(`本站已成功运行 ${diffDays} 天`);
    };

    updateRuntime(); // 初始更新
    const interval = setInterval(updateRuntime, 1000 * 60 * 60 * 24); // 每天更新一次

    return () => clearInterval(interval); // 清除定时器
  }, []);

  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <p className="mt-3 flex gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          Find the code on{" "}
          <a
            href="https://github.com/hamster1963/nezha-dash"
            target="_blank"
            className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
          >
            GitHub
          </a>
          {runtime && <span> - {runtime}</span>}
        </p>
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 2020-{new Date().getFullYear()}{" "}
          <a href={"https://t.me/majiangyuanlao"}>@majiangyuanlao</a>
        </section>
      </section>
    </footer>
  );
}
